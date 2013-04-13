(function ($) {
    $.widget("KodingSykosis.Drawer", {
        options: {
			dock: 'top',
			workspace: undefined,
			pinned: false,
			state: 'close',
			size: '215px',
			duration: 300,
			changed: $.noop,
			beforeChange: $.noop
        },

        // Set up the widget
        _create: function () {
			var self = this,
				dock = this.options['dock'].toLowerCase(),
				state = this.options['state'],
				workspace = this.options['workspace'],
				pinned = this.options['pinned'] === true,
				css = $.extend($.emptyBox(), {
					position: 'absolute',
					display: 'none'
				});
		
			switch(dock) {
				case 'right':
					css.left = undefined;
					css.right = 0;
				case 'left':
					$.extend(css, {
						width: this.options['size'],
						height: '100%'
					});
				
					break;
				case 'bottom':
					css.top = undefined;
					css.bottom = 0;
				case 'top':
				default:
					$.extend(css, {
						width: '100%',
						height: this.options['size']
					});
			}
		
			if (state != 'open' && state != 'close') {
				state = 'close';
			}
		
			if (workspace) {
				$(workspace).css({
					position: 'absolute'
				});
			}
		
			if (pinned) {
				state = 'open';
			}
		
			this.element
				.addClass('ui-drawer ui-widget-content')
				.css(css);
		
			$.fork(function() {self[state](false)});
        },
        
        open: function(animate) {
			var dock = this.options['dock'];
			var css = {};
			
			css[dock] = '0px';
			this.element
				.show();
			
			if (animate === false) {
				this._css(css, 'open');
			} else {
				this._animate(css, 'open');
			}
		},
	
		close: function(animate) {
			var dock = this.options['dock'],
				size = this._size(),
				pinned = this.options['pinned'],
				css = {};
			
			if (pinned) return;
			
			css[dock] = '-' + size + 'px';
			
			
			if (animate === false) {
				this._css(css, 'close');
			} else {
				this._animate(css, 'close');
			}
		},
	
		toggle: function() {
			var state = this.options['state'] == 'open' ? 'close' : 'open';
			this[state]();
		},
	
		_animate: function(css, state) {
			var workspace = $(this.options['workspace']),
				size = this._size(),
				dock = this.options['dock'],
				self = this;
				
			this._trigger('beforeChange', $.Event(), state);
				
			this.element.animate(css, {
				duration: this.options['duration'],
				complete: function() {
					self.options['state'] = state;
					self._trigger('changed', $.Event(), state);
					if (state == 'close') {
						self.element
							.hide();
					}
				},
				step: function(pos, ui) {
					if (workspace) {
						workspace.css(dock, pos+size);
					}
				}
			});
		},
		_css: function(css, state) {
			var workspace = this.options['workspace'],
				size = this._size(),
				dock = this.options['dock'],
				self = this;
				
			this._trigger('beforeChange', $.Event(), state);
			
			this.element
				.css(css);
				
			if (this.workspace) {
				this.workspace
					.css(dock, size+css[dock]);
			}
			
			this.options['state'] = state;
			this._trigger('changed', $.Event(), state);
			
			if (state == 'close') {
				this.element
					.hide();
			}
		},
		_size: function() {
			var dock = this.options['dock'].toLowerCase();
			
			switch(dock) {
				case 'left':
				case 'right':
					return this.element
							   .outerWidth(true);
			    case 'top':
			    case 'bottom':
			    	return this.element
			    			   .outerHeight(true);
			}
			
			return this.option['size'];
		}
    });
})(jQuery);