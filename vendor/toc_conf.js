var jquery_ztree_toc_opts = {
    debug:false,
    is_auto_number:true,
    documment_selector:'.markdown-body',
    ztreeStyle: {
        width:'25%',    //左侧列表滑块显示位置 326px or 25%
        overflow: 'auto',
        position: 'fixed',
        'z-index': 2147483647,
        border: '0px none',
        left: '0px',
        top: '0px',
				// 'overflow-x': 'hidden',
				'height': $(window).height() + 'px'
    }
}
var markdown_panel_style = {
    'width':'70%',  //右侧文本显示框占用宽度 326px or 70%
    'margin-left':'25%' //左侧列表显示框占用宽度 326px or 25%
};