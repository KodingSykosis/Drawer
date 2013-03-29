jQuery Drawer Widget
--

Dependancies:
- jQuery.jTransitions
- jQuery.ui.ViewStack
- jQuery.tinyscrollbar \(My fork of <http://baijs.nl/tinyscrollbar/>\)


Example:
    '<body>
        <div id="drawer"></div>
        <div id="workspace"></div>
        <ul id="menu"></ul>
    </body>'

    $('#drawer').Drawer({
        dock: 'top',
        workspace: '#workspace',
        state: 'close',
        size: '215px',
        duration: 300
    });