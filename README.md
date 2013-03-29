jQuery Drawer Widget
--

Dependancies:
- jQuery.jTransitions   [godwhj/jTransistions](https://github.com/godwhj/jTransistions)
- jQuery.ui.ViewStack   [godwhj/ViewStack](https://github.com/godwhj/ViewStack)
- jQuery.TinyScrollBar  [godwhj/TinyScrollBar](https://github.com/godwhj/TinyScrollbar)
        \(My fork of <http://baijs.nl/tinyscrollbar/>\)


Example:
    '''<body>
        <div id="drawer"></div>
        <div id="workspace"></div>
        <ul id="menu"></ul>
    </body>'''

    $('#drawer').Drawer({
        dock: 'top',
        workspace: '#workspace',
        state: 'close',
        size: '215px',
        duration: 300
    });