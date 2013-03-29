jQuery Drawer Widget
--

Dependancies:
- jQuery.jTransitions   [godwhj/jTransistions](https://github.com/godwhj/jTransistions)
- jQuery.ui.ViewStack   [godwhj/ViewStack](https://github.com/godwhj/ViewStack)
- jQuery.TinyScrollBar  [godwhj/TinyScrollBar](https://github.com/godwhj/TinyScrollbar)
        \(My fork of <http://baijs.nl/tinyscrollbar/>\)


Example: <br/>
**HTML**
<pre>
    &lt;body&gt;
        &lt;div id=&quot;drawer&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;workspace&quot;&gt;&lt;/div&gt;
        &lt;ul id=&quot;menu&quot;&gt;&lt;/ul&gt;
    &lt;/body&gt;
</pre>

**JavaScript**

    $('#drawer').Drawer({
        dock: 'top',
        workspace: '#workspace',
        state: 'close',
        size: '215px',
        duration: 300
    });