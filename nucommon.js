window.loading = false;



function nuSubformArray(sf, all){

    var a = Array();
    var i = 0;
	var p = '';

	if(arguments.length == 1){
		all = true;
	}
    
    if($('#'+sf+'0000_nuRow').length == 0){return a;}
    
    while($('#' + sf + ("000" + String(i)).slice(-4) + '_nuRow').length == 1){
	
		p = sf+("000" + String(i)).slice(-4);
		
		if($('#'+p+'_nuDelete').attr('checked') == undefined || all){
				a.push(p);
		}
        i++;
    }
    
    return a;

}



function nuRowPrefix(pthis){

    $('#'+pthis.id).attr('data-prefix');
    
}


function nuRowNumber(pthis){

    $('#'+pthis.id).attr('data-row');
    
}

function nuSearchPressed(e){

	if(!e){e=window.event;}

	if(e.keyCode == 13){                    //-- enter key
		$('#nuSearchButton').click();
	}
	
}


function nuKeyPressed(e, isPressed){

	if(!e){e=window.event;}

	if(e.keyCode == 16){                    //-- shift key
		window.nuShiftKey     = isPressed;
        $('.nuSelected').css( 'cursor',  'e-resize');
	}
	if(e.keyCode == 17){                    //-- control key
		window.nuControlKey   = isPressed;
        $('.nuSelected').css( 'cursor',  'move');
	}
	
}

String.prototype.replaceAll = function(str1, str2, ignore){

   return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), str2);

};


function nuGetParentSession(){ 

	if (window.opener != null){
		return window.opener.window.nuSession;
	}else{ 
		return document.defaultView.parent.nuSession;
	}  

}


function addButtons(buttons){

	for(var i = 0 ; i < buttons.length ; i++){

		var e = document.createElement('span');                            //-- create space
		e.setAttribute('id', 'nuSpace'+i);
		$('#nuActionButtonHolder').append(e);
		$('#' + e.id).html('&nbsp;');

        var e = document.createElement('input');                           //-- create button
		e.setAttribute('id', 'nuButton'+i);
		e.setAttribute('type', 'button');
		e.setAttribute('value',   ' '+nuTranslate(buttons[i].title)+' ');  //-- add title
		e.setAttribute('onclick', buttons[i].js);                          //-- add javascript
		$('#nuActionButtonHolder').append(e);
		$('#' + e.id).addClass('nuButton');
		
	}

}


function toggleModalMode(){   //-- login screen

	if($("#modal_div").length == 0){

		var e = document.createElement('div');
		e.setAttribute('id', 'modal_div');
		$('body').append(e);
		$('#' + e.id).css({
            'width'            : '100%',
            'height'           : '100%',
            'top'              : '0px',
            'left'             : '0px',
            'position'         : 'absolute',
            'filter'           : 'Alpha(Opacity=20)',
            'opacity'          : '0.2',
            'background-color' : '#000000'
        });

        var e = document.createElement('div');
		e.setAttribute('id', 'userpass1');
		$('body').append(e);
		$('#' + e.id).css({
            'width'            : '310px',
            'height'           : '300px',
            'top'              : '15%',
            'left'             : '35%',
            'border-style'     : 'solid',
            'border-color'     : 'grey',
            'border-width'     : '1px',
            'position'         : 'absolute',
            'background-color' : 'white'
        })
		.addClass( 'nuShadeHolder');

		var screenSection = e.id;

		var e = document.createElement('span');
		e.setAttribute('id', 'sptitle');
		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'top'              : '35px',
            'left'             : '5px',
            'width'            : '290px',
            'text-align'       : 'center',
            'font-size'        : '25px',
            'font-family'      : 'sans-serif',
            'position'         : 'absolute',
            'background-color' : 'white'
        })
		.html('<img src=\'nuBuilder-Logo-medium.png\'/>');


		var e = document.createElement('span');
		e.setAttribute('id', 'dbtitle');
		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'top'              : '92px',
            'left'             : '5px',
            'width'            : '290px',
            'text-align'       : 'center',
            'font-size'        : '15px',
            'font-family'      : 'sans-serif',
            'position'         : 'absolute',
            'background-color' : 'white'
        })
		.html(nuGetTitle());

		var e = document.createElement('span');
		e.setAttribute('id', 'sptitlea');
		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'top'              : '135px',
            'left'             : '30px',
            'position'         : 'absolute',
            'background-color' : 'white',
            'font-family'      : 'sans-serif',
            'font-size'        : '15px'
        })
		.html('Username :');
        
		var e = document.createElement('span');
		e.setAttribute('id', 'sptitleb');
		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'top'              : '180px',
            'left'             : '30px',
            'position'         : 'absolute',
            'background-color' : 'white',
            'font-family'      : 'sans-serif',
            'font-size'        : '15px'
        })
		.html('Password :');

		var e = document.createElement('input');
		e.setAttribute('id', 'u');
		e.setAttribute('autocapitalize', 'off');
        e.setAttribute('autocorrect', 'off');
		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'width'            : '150px',
            'top'              : '135px',
            'left'             : '110px',
            'position'         : 'absolute',
            'background-color' : 'white',
            'font-size'        : '22px',
            'line-height'      : '22px'
        });
		
		var e = document.createElement('input');
		e.setAttribute('id', 'p');
		e.setAttribute('type', 'password');
		e.setAttribute('autocapitalize', 'off');
        e.setAttribute('autocorrect', 'off');
		$('#'+ screenSection).append(e);
		
        $('#' + e.id).css({
            'width'            : '150px',
            'top'              : '180px',
            'left'             : '110px',
            'position'         : 'absolute',
            'background-color' : 'white',
            'font-size'        : '22px',
            'line-height'      : '22px'
        })
            .keypress(function(event) {
                
                if ( event.which == 13 ) {
                    nuLogin();
                }
            
            });
                
		var e = document.createElement('input');
		e.setAttribute('id', 'log');
		e.setAttribute('type', 'button');
		e.setAttribute('onclick', 'nuLogin()');

		$('#'+ screenSection).append(e);
		$('#' + e.id).css({
            'width'            : '250px',
            'height'           :  '35px',
            'top'              : '230px',
            'left'             : '30px',
            'position'         : 'absolute',
            'background-color' : '#D4CEE6',
            'border-radius'    : '5px',
            'font-size'        : '22px',
            'line-height'      : '22px'
        })
		.val('Login');
		
	}else{
		$("#modal_div").remove();
		$("#userpass").remove();
		$("#userpass1").remove();
	}
    $('#u').focus();
}




function nuSID(){

	try{
		return document.defaultView.parent.window.nuSession.nuSessionID;
	}catch(e){
		return '';
	}
}


function nuIsDesktop(){

	var q = window.location.href.substr(window.location.pathname.length+window.location.origin.length);
	if(q == ''){
		return true;
	}else{
		return false;
	}
}

function nuGetIframeID(){

	return window.location.href.substr(window.location.pathname.length+window.location.origin.length+4);

}

function nuOpenObjectForm(pThis){

	if(!nuIsGA()){return;}

	if(window.nuDenied != ''){                           //-- stop access to system tables
		if(nuIsSystem()){
			return;
		}
	}

	var id                  = $('#'+pThis.id).attr('data-id');
	if(window.nuShiftKey){
		nuMoveObject(pThis.id.substr(6), 10, 0);	
	}else{
		window.nuControlKey = true;
		nuOpenForm('nuobject', id, 'nuobject', id, 'nuBuilder Objects');
		window.nuControlKey = false;
	}

}

function nuOpenFormForm(pThis){

    if(!nuIsGA()){return;}
        
	if(window.nuDenied != ''){                           //-- stop access to system tables
		if(nuIsSystem() ||  nuFORM.form_id == 'nuhome'){ //-- nuIsSystem() allows for 'nuhome' but it shouldn't be here
			return;
		}
	}

	var id              = $('#'+pThis.id).attr('data-id');

	if(window.nuControlKey){                              //-- held down manually
		nuOpenForm('nuobject', '', 'nuobject', '', 'nuBuilder Objects', id);
	}else{
		window.nuControlKey = true;                       //-- faked keypress
		nuOpenForm('nuform', id, 'nuform', id, 'nuBuilder Form');
	}

	window.nuControlKey = false;

}

function nuOpenForm(parentFormID, parentRecordID, formID, recordID, formTitle, filter){

    var w              = new nuWindow();
	w.form_id          = formID;
	w.parent_form_id   = parentFormID;
	w.parent_record_id = parentRecordID;
	w.title            = formTitle;
	
	if(arguments.length == 6){
		w.filter       = filter;
	}
	if(recordID == '' || recordID == 'null'){
		w.call_type    = 'getbrowseform';
		w.tip          = 'Browse';
		w.type         = 'Browse';
	}else{
		w.call_type    = 'geteditform';
		w.record_id    = recordID;
		w.tip          = 'Edit';
		w.type         = 'Edit';
	}
	if(window.nuControlKey){                  //-- open in a new window
		nuOpenNewWindowManager(w);		
	}else{
		nuBuildForm(w);
	}
	
}

function nuOpenFormInFrame(formID,recordID){

	var parent           = '';
	var w                = new nuWindow();
	w.call_type          = 'geteditform';
	w.form_id            = formID;
	w.breadcrumb         = '0';
	w.record_id			 = recordID;
	w.tip				 = 'Edit';
	w.type				 = 'Edit';

	nuSession.nuWindows.push(w);
	nuIframeWindow(w);
	
}

function nuOpenNewWindowManager(w) {

	if ( nuOpenNewWindowCheck() ) {
		if (window.top === window.self) {
                	nuOpenNewWindow(w);
                } else {
                        nuOpenNewWindowParent(w);
                }
	} else {
        	nuSession.nuWindows.push(w);
                window.open('index.php?i='+w.id);
	}
}

function nuOpenNewWindowCheck() {
	
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		return true;
	}
	
	return false;
}

function nuIframeWindowSizer() {

        if (window.top !== window.self) {

                if ( window.parent.document.getElementById('nuDrag') ) {
                        var iWidthSource = parseInt(document.getElementById('nuHolder').style.width);
                        var iWidthBuffer = 20;                                                               //--offset of 20 to account for padding
                        var iWidthDest   = iWidthSource + iWidthBuffer;
                        window.parent.document.getElementById('nuDrag').style.width = iWidthDest+'px';
                        window.parent.document.getElementById('nuDragBar').style.width = iWidthDest+'px';
                        var iHeightSource = parseInt(document.getElementById('nuHolder').style.height);
                        var iHeightBuffer = 20;
                        var iHeightDest   = iHeightSource + iHeightBuffer;
                        window.parent.document.getElementById('nuDrag').style.height = iHeightDest+'px';
                }
        }
}

function nuIframeWindow(w) {

	var url = 'index.php?i='+w.id;
	nuCustomIframeWindow(url, w.id, '23px', '23px');

}

function nuCustomIframeWindow(url, iframeID, startWidth, startHeight, startTop, startLeft) {
	

	if(arguments.length > 1){
                var iframe_id  = iframeID;
        } else {
		var iframe_id = 'custom';
	}

	if(arguments.length > 2){
                var sW  = startWidth;
        } else {
                var sW = '960px';
        }

	 if(arguments.length > 3){
                var sH  = startHeight;
        } else {
                var sH = '660px';
        }

	if(arguments.length > 4){
                var sT  = startTop;
        } else {
                var sT = '20px';
        }
	
	if(arguments.length > 5){
                var sL  = startLeft;
        } else {
                var sL = '50px';
        }


        var e = document.createElement('div');
        e.setAttribute('id', 'nuModal');
        $('body').append(e);
        $('#' + e.id).css({
            'width'            : '100%',
            'height'           : '100%',
            'top'              : '0px',
            'left'             : '0px',
            'position'         : 'fixed',                   //--29/01/2014 - Fixed position covers entire screen, whilst absolute covers what you see at the moment - Ken
            'background-color' : '#000000',
            'filter'           : 'Alpha(Opacity=20)',
            'opacity'          : '.2'
        });

        var e = document.createElement('div');              //-- create draggable div
        e.setAttribute('id', 'nuDrag');
        $('body').append(e);
        $('#' + e.id).css({
            'width'            : sW,
            'height'           : sH,
            'top'              : sT,
            'left'             : sL,
            'position'         : 'absolute',
            'background-color' : '#E1E8EA',
            'border-width'     : '1px',
            'border-color'     : '#01A6F5',
            'border-style'     : 'solid',
            'border-radius'    : '5px',
            'filter'           : 'Alpha(Opacity=100)',
            'opacity'          : '1'
        })
        .draggable({ handle: 'nuDragBar' });

		var screenSection = 'nuDrag';
        var e = document.createElement('div');              //-- create draggable div
        e.setAttribute('id', 'nuDragBar');
        $('#'+ screenSection).append(e);
        $('#' + e.id).css({
            'width'            : '20px',
            'height'           : '22px',
            'top'              : '0px',
            'left'             : '0px',
            'position'         : 'absolute',
            'background-color' : '#C0CDD1',
            'z-index'          : '1',
            'border-radius'    : '5px'
        });

        var e = document.createElement('div');              //-- create draggable div
        e.setAttribute('id', 'nuDragBarClose_');
        $('#nuDragBar').append(e);
        $('#' + e.id).css({
            'width'            : '20px',
            'height'           : '20px',
            'top'              : '1px',
            'left'             : '0px',
            'position'         : 'absolute',
            'background-color' : '#E1E8EA',
            'z-index'          : '2'
        })
        .addClass('nuClose')
        .html('&#10006;')
        .mousedown(function() {
                $('#nuModal').remove();
                $('#nuDrag').remove();
        });

		var e = document.createElement('iframe');              //-- create iframe
        e.setAttribute('name', iframe_id);
        e.setAttribute('id', iframe_id);
        e.setAttribute('src', url);
        $('#'+ screenSection).append(e);
        $('#' + iframe_id).css({
            'border-radius' : '5px',
            'width'         : '100%',
            'height'        : '100%',
            'top'           : '0px',
            'left'          : '0px',
            'position'      : 'absolute'
        });

	}

function nuOpenNewWindow(w) {
	w.breadcrumb         = '0';
	nuSession.nuWindows.push(w);
	nuIframeWindow(w);
}

function nuOpenNewWindowParent(w) {
	window.parent.nuOpenNewWindow(w);
}

function nuOpenLookup(pThis, pFilter){

//	nuFORM.call_type     = 'none';
	var parent           = '';
	var w                = new nuWindow();
    w.parent_form_id     = nuFORM.parent_form_id;
	w.call_type          = 'getlookupform';
	w.form_id            = $('#'+pThis.id).attr('data-form');
	w.form_data          = nuGetData();
	w.filter             = '';
	if(arguments.length == 2){
		w.filter             = pFilter;
	}
	w.breadcrumb         = '0'
	w.prefix             = $('#'+pThis.id).attr('data-prefix');  //-- lookup prefix
	if(pThis.id.substr(0,4) == 'btn_'){
		w.lookup         = pThis.id.substr(w.prefix.length+4);     //-- lookup id
	} else {
		w.lookup         = pThis.id;
	}

	nuSession.nuWindows.push(w);
	nuIframeWindow(w);
}


function nuAddBreadCrumbs(){

	var b = window.nuSession.breadCrumb;
	var a = "&nbsp;&#9658;&nbsp;";

	for(var i = 0 ; i < b.length ; i++){
		var e = document.createElement('span');                  //-- create a breadcrumb
		e.setAttribute('id', 'nuBreadCrumb_'+i);
		$('#nuBreadCrumbHolder').append(e);
		$('#'+e.id).html(b[i].title)
		.addClass('nuBreadCrumbSectionEnd');
		if(i+1==b.length){
			e.setAttribute('title',   'You are here..');
			e.setAttribute('data-id',   b[i].form_id);
			e.setAttribute('ondblclick',   'nuOpenFormForm(this)');
			
		}else{
			e.setAttribute('onclick', 'nuGoToForm('+i+')');
			e.setAttribute('title',   b[i].tip);
			$('#' + e.id).addClass('nuBreadCrumbSection');
			var e = document.createElement('span');              //-- create an arrow
			e.setAttribute('id', 'nuArrow_'+i);
			$('#nuBreadCrumbHolder').append(e);
			$('#'+e.id).addClass('nuBreadCrumbPointer')
			.html(a);
		}
	
	}
}

function nuAddJavascript(o){
        
    window.nuLoadBrowse = null;
    window.nuLoadEdit   = null;
	window.nuOnSave     = null;

	var e = document.createElement('script');
        
	e.setAttribute('type', "text/javascript");
	e.innerHTML = o.form_javascript;
	$('#nuHolder').append(e);
        
}


function nuGoToForm(i, ask){

    if(nuFORM.edited == '1'){
        
        if(arguments.length != 2){
            if(!confirm("Leave This Form Without Saving?")){
                return;
            }
        }
        
    }
    if(arguments.length == 0){
            var i = window.nuSession.breadCrumb.length - 1;
    }

    var b         = window.nuSession.getBreadCrumb(i);
    
    nuBuildForm(b);
	
}


function nuReloadForm(){

	nuFORM.call_type    = 'geteditform';
	
    if(nuFORM.edited == '1'){
        
		if(!confirm("Leave This Form Without Saving?")){
			return;
		}
        
    }

    var b         = window.nuSession.reloadBreadCrumb((window.nuSession.breadCrumb.length - 1));
    
    nuBuildForm(b);
	
}



function nuErrorMessage(e, remove){

    var m         = '';
    
    if(e.length > 0){
		if(typeof(remove) == 'undefined') {
			window.nuSession.breadCrumb.pop();               //-- remove errored breadcrumb
		}
        
        if(e[0] == 'You are not currently logged in'){
				location.reload();
        }
		
        for(var i = 0 ; i < e.length ; i++){
            m     = m + e[i] + "\r";
        }
        
        alert(m);
        return true;
        
    }

    return false;

}



//==============ajax calls=========================================

function nuNewForm(sync,operation){                                                         //-- save data from form and rebuild form

	if(typeof(sync) === "undefined") {
		sync = true;
	}
	
	if(typeof(operation) === "undefined") {
		operation = 0;
	}

	nuFORM.call_type    = 'newform';

    if(typeof nuOnSave == 'function') {
		if(!nuOnSave()){
			return;
		}
	}

	nuFORM.form_data    = nuGetData();
	var isLookup = true;
	if(typeof(window.nuSession.breadCrumb[0].lookup) == 'undefined') {
		isLookup = false;
	}
		
	nuSavingProgressMessage();
	
	var request = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : nuFORM},
		dataType : "json",
		async	 :  sync
		}).done(function(data){
			if(nuErrorMessage(data.ERRORS, false)){
				nuAbortSave();
				return;
			}

			var obj          = $.parseJSON(data.DATA);
			
			if(isLookup) {
				var w = window.nuSession.breadCrumb[0];
				if(w.lookup.substr(w.prefix.length,4) == 'btn_'){
					document.defaultView.parent.$('#'+w.prefix+w.lookup.substr(w.prefix.length+4)).val(obj.record_id);
					document.defaultView.parent.$('#'+w.prefix+w.lookup.substr(w.prefix.length+4)).change();
				} else {
					document.defaultView.parent.$('#'+w.lookup).val(obj.record_id);
					document.defaultView.parent.$('#'+w.lookup).change();
				}
			
				nuRemoveModal();
				
			} else {
				nuFORM.clone     = '0';
				nuFORM.edited    = '0';
				
				if(operation == 0) {
					nuFORM.record_id = obj.record_id;
					
					window.nuFormats = $.parseJSON(obj.formats);
					window.formatter = new nuFormatter();

					nuBuildEditForm(obj);
				} else if(operation == 1){
					nuFORM.call_type    = 'geteditform';
					nuFORM.record_id    = '-1';
					nuSession.breadCrumb.pop();
					nuBuildForm(nuFORM);
				}	
			}
			
			nuSavingMessage();
			
			if(window.opener!=null){
				window.opener.window.nuGoToForm()
			}
	});
}




function nuSaveForm(sync,operation){

    if(typeof nuOnSave   == 'function') {                                  //-- check if this custom function has been created
		if(!nuOnSave()){                                                   //-- run it if it has
			return;
		}
	}

	if(typeof(sync)      === "undefined") {sync           = true;}
	if(typeof(operation) === "undefined") {operation      = 0;}

	var w                = new nuCopyJSObject(nuFORM);
	w.call_type          = 'check_edit';

	var request          = $.ajax({
	
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : w},
		dataType : "json",
		}).done(function(data){

			var obj      = $.parseJSON(data.DATA);

			if(obj.user != ''){

				if (confirm('Changed by ' + obj.user + ' do you wish to over write their changes?')) {
					nuCompleteSavingForm(sync,operation);
				}

			}else{
				nuCompleteSavingForm(sync,operation);
			}

	});

}




function nuCompleteSavingForm(sync,operation){                             //-- save data from form and rebuild form

	if(nuFORM.call_type  == 'cloneform')  { nuFORM.cloned = '1';}          //-- data comes from a cloned form
        
	nuFORM.call_type     = 'saveform';
	nuFORM.form_data     = nuGetData();
	var isLookup         = true;
	
	if(typeof(window.nuSession.breadCrumb[0].lookup) == 'undefined') {
		isLookup         = false;
	}
		
	nuSavingProgressMessage();
	
	var request         = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : nuFORM},
		dataType : "json",
		async	 :  sync
		}).done(function(data){
			if(nuErrorMessage(data.ERRORS, false)){
				nuAbortSave();
				return;
			}

			var obj     = $.parseJSON(data.DATA);
			
			if(isLookup) {
				var w = window.nuSession.breadCrumb[0];
				if(w.lookup.substr(w.prefix.length,4) == 'btn_'){
					document.defaultView.parent.$('#'+w.prefix+w.lookup.substr(w.prefix.length+4)).val(obj.record_id);
					document.defaultView.parent.$('#'+w.prefix+w.lookup.substr(w.prefix.length+4)).change();
				} else {
					document.defaultView.parent.$('#'+w.lookup).val(obj.record_id);
					document.defaultView.parent.$('#'+w.lookup).change();
				}
			
				nuRemoveModal();
			
			} else {
				nuFORM.clone     = '0';
				nuFORM.edited    = '0';
				
				if(operation == 0) {
					nuFORM.record_id = obj.record_id;
					
					window.nuFormats = $.parseJSON(obj.formats);
					window.formatter = new nuFormatter();

					nuBuildEditForm(obj);
				} else if(operation == 1){
					nuFORM.call_type    = 'geteditform';
					nuFORM.record_id    = '-1';
					nuSession.breadCrumb.pop();
					nuBuildForm(nuFORM);
				}	
			}
			
			nuSavingMessage();
			
			if(window.opener!=null){
				window.opener.window.nuGoToForm()
			}

            nuFORM.cloned = 0;
			
	})
	.fail(function(xhr, err) {
	   	alert(nuTranslate(nuFormatAjaxErrorMessage(xhr,err)));
		nuAbortSave();
		return;
	});
}


function nuPrintPDF(pCode, id, pFilename){  //-- save data from form and rebuild form

    var P               = new nuCopyJSObject(nuFORM);
	
	if(arguments.length < 3){               //-- don't create file
		var pFilename   = '';
	}

	P.call_type         = 'printpdf';
    P.parent_record_id  = pCode;
	P.form_data         = nuGetData();
	P.filename          = pFilename;
    
    if(arguments.length > 1){
        P.iframe        = 1;
    }else{
        P.iframe        = 0;
    }

	var request = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : P},
                async    : false,
                success  : function(data) {
                    var obj          = $.parseJSON(data.DATA);
					
					if(pFilename == ''){
					
						var pdfUrl   = 'nurunpdf.php?i='+obj.id;
                    
						if(obj.iframe == 0){
							window.open(pdfUrl);
						}else{
							$('#'+id).attr('src',pdfUrl);
						}
					}else{                                            //-- attach as email
						console.log(pFilename);
					}
                },
		dataType : "json"
		}).done(function(data){

            if(nuErrorMessage(data.ERRORS)){return;}
                        
	});

}

function nuRunPHP(pCode, id){

    var P               = new nuCopyJSObject(nuFORM);
	P.call_type         = 'runphp';
    P.parent_record_id  = pCode;
	P.form_data         = nuGetData();
    
    if(arguments.length > 1){
        P.iframe        = 1;
    }else{
        P.iframe        = 0;
    }
    
	var request = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : P},
        async    : false,
        success  : function(data) {
				
				var obj          = $.parseJSON(data.DATA);
				var phpUrl       = 'nurunphp.php?i='+obj.id;
				
				if(obj.iframe == 0){
					window.open(phpUrl);
				}else{
					setTimeout( function() { $('#'+id).attr('src',phpUrl); },0);
					
				}
				
			},
			
		dataType : "json"
		
		}).done(function(data){

			if(nuErrorMessage(data.ERRORS)){return;}
                        
	});

}

function nuRunPrintBrowse(){

    var F               = new nuCopyJSObject(nuFORM);
	F.call_type         = 'runprintbrowse';
	var request = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : F},
                async    : false,
                success  : function(data) {
                    var obj          = $.parseJSON(data.DATA);
                    window.open('nurunprintbrowse.php?i='+obj.id);
                },
                dataType : "json"
		}).done(function(data){

			if(nuErrorMessage(data.ERRORS)){return;}
                        
	});

}


function nuCopyJSObject(from){
    for (var key in from){
        this[key] = typeof from[key] == "object" ? new nuCopyJSObject(from[key]) : from[key];
    }
}



function nuDeleteForm(){  //-- delete data from form

	if(!confirm("Are you sure you wish to delete this record?")){return;}
	
	nuFORM.call_type    = 'deleteform';
	nuFORM.form_data    = nuGetData('delete all');

	var request = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : nuFORM},
		dataType : "json"
		}).done(function(data){

                        if(nuErrorMessage(data.ERRORS)){return;}

			var obj          = $.parseJSON(data.DATA);
			window.nuFormats = $.parseJSON(obj.formats);
			window.formatter = new nuFormatter();
			if(window.nuSession.breadCrumb.length == 1){
				window.opener.window.nuGoToForm()
				window.close()
			}else{
				nuGoToForm(window.nuSession.breadCrumb.length-2, false)
			}

	});
	
}



function nuCloneForm(pThis, formID, recordID){
	var w          = new nuWindow();
	w.form_id      = formID;
	w.title        = $('title').html();
	w.call_type    = 'cloneform';
	w.record_id    = recordID;
	w.tip          = 'Edit';

	window.nuSession.breadCrumb.pop();                                   //-- remove breadcrumb before another is added
	nuBuildForm(w);
	
}


function nuValidateAccess(type, code){

	w             = window.nuFORM;
	w.call_type   = 'validateaccess'
    w.validate    = type;
	w.code        = code;
	var mess      = Array();
	
	var request   = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : w},
		dataType : "json",
		async    : false
		}).done(function(data){
			
		mess = data.ERRORS;
			
	});
	return mess;
}



function nuValidatePDF(code){

	return nuValidateAccess('printpdf', code);
	
}


function nuValidatePHP(code){

	return nuValidateAccess('runphp', code);
	
	
}


function nuBuildForm(w){

	window.nuFORM = w;
    
	if(w.call_type == 'geteditform' || w.call_type == 'cloneform'){      //-- get information and then build edit form
        if(window.loading == false) {
            window.loading = true;
            var request = $.ajax({
                url      : "nuapi.php",
                type     : "POST",
                data     : {nuWindow : w},
                dataType : "json",
                async    : false
                }).done(function(data){
                    window.loading = false;
                    if(nuErrorMessage(data.ERRORS, false)){nuRemoveModal();return;}

                    var obj          = $.parseJSON(data.DATA);
                    window.nuFormats = $.parseJSON(obj.formats);
                    window.formatter = new nuFormatter();
                    
                    var b = window.nuSession.breadCrumb[window.nuSession.breadCrumb.length-1];                            

                    if(b!= window.nuFORM) nuSession.setBreadCrumb(window.nuFORM);
                    
                    nuBuildEditForm(obj);
            });
        }
	}

	if(w.call_type == 'getbrowseform' || w.call_type == 'getlookupform' ){  //-- get information and then build browse or lookup form
            
        w.search_columns = nuBuildSearchColumnString();                     //-- list of searchable Columns
        
        if(window.loading == false) {
            window.loading = true;
            var request = $.ajax({
                url      : "nuapi.php",
                type     : "POST",
                data     : {nuWindow : w},
                dataType : "json"
                }).done(function(data){
                    window.loading = false;
                    if(nuErrorMessage(data.ERRORS, false)){return;}

                    var obj          = $.parseJSON(data.DATA);
                    window.nuFormats = $.parseJSON(obj.formats);
                    window.formatter = new nuFormatter();
                    
                    var b = window.nuSession.breadCrumb[window.nuSession.breadCrumb.length-1];                            
                    if(b!= window.nuFORM) nuSession.setBreadCrumb(window.nuFORM);
                    
                    nuBuildBrowseForm(obj);
            });
        }
	}

}

function nuBuildSearchColumnString(){
    
    var cols = Array();
    
    for(i = 0 ; i < 1000 ; i++){
        
        if($('#nusearch_' + i).length == 0){                              //-- no such column number
            break;
        }else{
            if($('#nusearch_' + i).is(':checked')){
                cols.push(i);
            }            
            
        }
        
    }
    
    var searchCol = cols.join();
    
    return searchCol;
    
}

function nuLookupID(pThis){  //-- get lookup from id

	var w            = new nuWindow();
	w.call_type      = 'lookupid';
	w.title          = '';
	w.tip            = '';
	w.record_id      = pThis.value;
	w.parent_form_id = $('#'+pThis.id).attr('data-parent');
	w.lookup_id      = $('#'+pThis.id).attr('data-id');
	w.prefix         = $('#'+pThis.id).attr('data-prefix');
	w.object_id      = $('#'+pThis.id).attr('data-nuobject');
	w.form_id        = $('#'+pThis.id).attr('data-form');
	
//-- added by sc 2014-02-08

	nuGetData('create hash variables');                                 //-- set currrent Form's values as hash variables (nuFORM properties)
	
	var alreadyDefined   = Array();

	for (var key in w){
		alreadyDefined.push(key);
	}
	
	for (var key in nuFORM){
		if(alreadyDefined.indexOf(key) == -1){
			w[key] = nuFORM[key];                                   //-- add values from parent values (so they can be used as hash variables)
		}
	}
		
//-- end added by sc			
			
	var o            = $('#'+pThis.id).attr('data-nuobject');
	var oprefix      = $('#'+pThis.id).attr('data-prefix');
	var request      = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : w},
		dataType : "json"
		}).done(function(data){
			var obj          = $.parseJSON(data.DATA);

			$('#'+obj.prefix+              obj.lookup_id).val(obj.id)
			$('#'+obj.prefix+'code'       +obj.lookup_id).val(obj.code)
			$('#'+obj.prefix+'description'+obj.lookup_id).val(obj.description)

			$.each( obj.lookup_other_fields, function(i, n){
                    //-- begin added by br 12/02/2014: checks the type of the object and if it is a textbox remove all new line characters
                    if( $('#'+obj.prefix + i).attr('data-nuobject-type') == 'text' ) {
                        n = n.replace(/\n/g,' ');
                    }
                    //-- end added by br
                    $('#'+ obj.prefix + i).val(n);
            });
			
            eval(obj.javascript);
        });
}



function nuLookupCode(pThis){  //-- get lookup from code

	var w            = new nuWindow();
	w.call_type      = 'lookupcode';
	w.title          = '';
	w.tip            = '';
	w.record_id      = pThis.value;
	w.parent_form_id = $('#'+pThis.id).attr('data-parent');
	w.lookup_id      = $('#'+pThis.id).attr('data-id');
	w.prefix         = $('#'+pThis.id).attr('data-prefix');
	w.object_id      = $('#'+pThis.id).attr('data-nuobject');
	w.form_id        = $('#'+pThis.id).attr('data-form');

//-- added by sc 2014-02-08

	nuGetData('create hash variables');                                 //-- set currrent Form's values as hash variables (nuFORM properties)

	var alreadyDefined   = Array();

	for (var key in w){
		alreadyDefined.push(key);
	}
	
	for (var key in nuFORM){
		if(alreadyDefined.indexOf(key) == -1){
			w[key] = nuFORM[key];                                   //-- add values from parent values (so they can be used as hash variables)
		}
	}
		
//-- end added by sc			
			
    var prev = pThis._prevValue;    
    
	var request  = $.ajax({
		url      : "nuapi.php",
		type     : "POST",
		data     : {nuWindow : w},
		dataType : "json"
		}).done(function(data){
			var obj          = $.parseJSON(data.DATA);

			if(obj.id == 'many records' && obj.code == 'many records' && obj.description == 'many records'){
				nuOpenLookup(document.getElementById(obj.prefix+obj.lookup_id), pThis.value);   //-- open a lookup
			}else{
                $('#'+obj.prefix+              obj.lookup_id).val(obj.id)
				$('#'+obj.prefix+'code'       +obj.lookup_id).val(obj.code)
				$('#'+obj.prefix+'description'+obj.lookup_id).val(obj.description)
                                $.each( obj.lookup_other_fields, function(i, n){
								
									if(n === null){//-- added by sc 25/02/2014
										n = '';
									}
                                    //-- begin added by br 12/02/2014: checks the type of the object and if it is a textbox remove all new line characters
                                    if( $('#'+obj.prefix + i).attr('data-nuobject-type') == 'text' ) {
                                        n = n.replace(/\n/g,' ');
                                    }
                                    //--end added by br
                                    $('#'+ obj.prefix + i).val(n)
                                });
                if( prev !== pThis.value) {     //--Ben: added to prevent javascript running multiple times over the same value.
                    eval(obj.javascript);
                }
                

			}
	});
    pThis._prevValue = pThis.value;

    $('.ui-menu-item').hide();
    $(pThis).blur();

}


function nuAutocomplete(e) {

        $(e).autocomplete({
            minLength: 2,
            autoFocus: false,
            delay: 300,

            source: function( request, response ) {

				//-- added by sc 2014-02-10

				var w        = new nuWindow();
				w.call_type  = 'autocomplete';
				w.title      = '';
				w.tip        = '';
				w.lookup_id  = $(e).attr('data-id');
				w.prefix     = $(e).attr('data-prefix');
				w.object_id  = $(e).attr('data-nuobject');
				w.form_id	 = $(e).attr('data-form');

				nuGetData('create hash variables');                                 //-- set currrent Form's values as hash variables (nuFORM properties)

				var alreadyDefined   = Array();

				for (var key in w){
					alreadyDefined.push(key);
				}

				for (var key in nuFORM){
					if(alreadyDefined.indexOf(key) == -1){
						w[key] = nuFORM[key];                                   //-- add values from parent values (so they can be used as hash variables)
					}
				}
						
				//-- end added by sc			
							
                w.record_id = request.term;
                 $.ajax({
                    url      : "nuapi.php",
                    type     : "POST",
                    data     : {nuWindow : w},
                    dataType : "json"
                    }).done(function(data){
                        if (data.SUCCESS) {
                            data = $.parseJSON(data['DATA'])
                            response( data['results'] );
                        } else {
                            console.log('Error returned from autocomplete');
                        }
                    })

            },
            select: function( event, ui ) {
			
                event.preventDefault();
                if( ui.item !== null ) {
                    $(this).val(ui.item.value);

                }
                nuLookupCode(this);
				
            },
            change: function( event, ui ) {     

            //--Ben: Using onchange for autocomplete caused issues with setting of values from autocomplete selections (both select and change were being executed)
                event.preventDefault();
                event.stopPropagation();
                //nuLookupCode(this);
            }
        }).data("autocomplete")._renderItem = function(ul,item){
            return $("<li>")
            .append($("<a>").html(item.label))
            .appendTo(ul);
        };

     
}





function nuLogin(u, p){

	var w              = new nuWindow();
	w.form_id          = 'nuindex';
	w.call_type        = 'login';
	w.record_id        = '-1';
	w.title            = nuTranslate('Home');
	w.tip              = nuTranslate('Desktop');
	window.nuFORM      = w;
	
	if(arguments.length == 0){
	
		w.username     = $('#u').val();
		w.password     = $('#p').val();
		$("#modal_div").remove();
		$("#userpass").remove();
		$("#userpass1").remove();
		
	}else{
	
		w.username     = u;
		w.password     = p;
		
	}


	var request = $.ajax({
		url: "nuapi.php",
		type: "POST",
		data: {nuWindow : w},
		dataType: "json"
		}).done(function(data){
			if(data.DATA['session_id'] == 'Login Failed'){
				alert('Your username or password was incorrect');
				toggleModalMode();
				$('#p').val('');
				$('#p').focus();
			}else{
				window.nuFORM.form_id = data.DATA['index_id'];
				nuSession.setBreadCrumb(window.nuFORM);
				
				if(arguments.length == 0){
					toggleModalMode();
				}
				
				window.nuSession.setSessionID(data.DATA['session_id']);
				w.call_type           = 'geteditform';
                                w.session_id          = data.DATA['session_id'];
                                if(!window.nuTimeout){
                                    var request = $.ajax({
                                        url      : "nuapi.php",
                                        type     : "POST",
                                        data     : {nuWindow : w},
                                        dataType : "json"
                                        }).done(function(data){

                                            if(nuErrorMessage(data.ERRORS)){return;}

                                            var obj          = $.parseJSON(data.DATA);
                                            window.nuFormats = $.parseJSON(obj.formats);
                                            window.formatter = new nuFormatter();
                                            nuBuildEditForm(obj);
                                    });
                                }

			}
	});

}



function nuMoveObject(id, top, left){

    var p  =  $('#'+id).closest("[id^=nu_tab_area]").attr('id');
    var t  = document.createElement('table');                             //-- create Object holder 
    var e  = document.createElement('div');                               //-- create Object holder 
	var objectID = $('#'+id).attr('data-nuobject');
    t.setAttribute('id',   'nu_table_'  + id);
    e.setAttribute('id',   'nu_holder_' + id);
    e.setAttribute('data-nuobject',       objectID);
    $('#' + p).append(e);
    $('#' + e.id).append(t)
   .css({
        'top'          : top+'px',
        'left'         :   left+'px',
        'position'     : 'absolute',
        'border-style' : 'none'
   })
   .addClass('nuSelectedTab');

    $('#' + t.id).append($('#tr_'+id));

    if(nuIsGA()){

		$('#title_' + id).hover(
                function (){
                        if(nuIsMoveable()){
                            $('#' + this.id).css('color', 'red');
                        }
                }, 
                function (){
                        $('#' + this.id).css('color', '');
                }
        );

        $('#' + e.id).draggable({
            
            stop: function() { 

                var pos              = $('#' + e.id).position();
                if($('#' + e.id).attr('data-nuobject') == undefined){
                    
                    var oID          = $('#' + e.id).attr('data-id');
                    
                }else{
                    
                    var oID          = $('#' + e.id).attr('data-nuobject');
                    
                }

                nuFORM.moved_objects = nuFORM.moved_objects + '|' + pos.top + ',' + pos.left + ',' + oID; 

            },
            drag: function(event, ui) { if(!nuIsMoveable()) return false; }
        });
    }
	
}


function nuIsGA(){

	if(window.nuDenied != ''){
	
		if(nuIsSystem()){
			return false;                                    //-- stop access to system tables
		}else{
			return window.nu_user_name == 'globeadmin';
		}
		
	}else{
		return window.nu_user_name == 'globeadmin';
	}
    

}
    

function nuIsSystem(){

	return nuFORM.form_id.substring(0,2) == 'nu' && nuFORM.form_id != 'nuhome';
	
}	
	
	
function nuIsMoveable(){
    
    return window.nuMoveable;

}
    
    
function nuSavingProgressMessage(){
    var e = document.createElement('div');
    e.setAttribute('id', 'nuProgressSaved');
    $('#nuHolder').append(e);
    $('#' + e.id).html('<img src=\'ajax-loader.gif\'/>')
    .addClass( 'nuSaveMessageProgress')
    .show();
	$('input[id^="nuButton"]').hide();
}    
  
function nuSavingMessage(){
	$("#nuProgressSaved").hide();
    var e = document.createElement('div');
    e.setAttribute('id', 'nuNowSaved');
    $('#nuHolder').append(e);
    $('#' + e.id).html('Record Saved')
    .addClass( 'nuSaveMessage');
    $("#nuNowSaved").fadeToggle(3000);
} 

function nuAbortSave() {
	$("#nuProgressSaved").hide();
	$('input[id^="nuButton"]').show();
}   

function nuObjectToString(variable,i) {

	if (variable != null) {

        	var string = '';
	
	          if(typeof variable == 'object'){ 
             		 string += 'Object ( <ul style="list-style:none;">';
	                 var key;
           		 for(key in variable) {
	                      if (variable.hasOwnProperty(key)) {
            			        string += '<li>['+key+'] => ';
			                string += nuObjectToString(variable[key],i+1);
			                string += '</li>';
		                  }
              		}
              		string += '</ul> )';
          	} else {
              		string = variable.toString();
          	}
          return string;

	} else {
		return 'empty';
	}
}






function nuPrint_r(o){


    var s = String();
    $.each(o, function(key, element){
    
        if (typeof element === "object" || typeof element === "array"){
            s = s + nuPrint_r(element);
        }else{
            s = s + '\n <br>key   : ' + key + '\n<br>value : ' + element;
        }
        
    });
    
    return s + '\n <br>';
    
}


function nuInsideSubform(p) {

	if (p.split('_')[1] == 'nuRow') {
		return true;	
	} else {
		return false;	
	}
}


function nuEmailPDF(pCode, pEmailTo, pAction, pSubject, pMessage, pCallType, pFileName) {
    if (typeof pAction == 'undefined' || pAction == ''){nuEmail(pCode, '', pEmailTo, pSubject, pMessage, pFileName);}  //-- If pAction is defined, PHP Code
    else {nuEmail('', pAction, pEmailTo, pSubject, pMessage, pFileName);}
}
   


function nuEmail(pPDF, pPHP, pEmailTo, pSubject, pMessage, pFileName) {

	if (typeof pPHP      == 'undefined'){var pPHP      = '';}
	if (typeof pEmailTo  == 'undefined'){var pEmailTo  = '';}
	if (typeof pSubject  == 'undefined'){var pSubject  = '';}
	if (typeof pMessage  == 'undefined'){var pMessage  = '';}
	if (typeof pFileName == 'undefined'){var pFileName = 'Report.pdf';} //-- Default name for Reports

	nuSetHash('nu_pdf_code', pPDF);                                     //-- set up some hash variables
	nuSetHash('nu_php_code', pPHP);
	nuSetHash('nu_email_to', pEmailTo);
	nuSetHash('nu_email_subject', pSubject);
	nuSetHash('nu_email_message', pMessage);
	nuSetHash('nu_email_file_name', pFileName);
	nuSetHash('nu_previous_record_id', nuFORM.record_id);

	nuGetData('create hash variables');                                 //-- set currrent Form's values as hash variables so they can be referenced as if they were on the email Form.
	
	nuOpenFormInFrame('nuemail','-1');

}

function nuFormatAjaxErrorMessage(jqXHR, exception) {

    if (jqXHR.status === 0) {
        return ('Not connected.\nPlease verify your network connection.');
    } else if (jqXHR.status == 404) {
        return ('The requested page not found. [404]');
    } else if (jqXHR.status == 500) {
        return ('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        return ('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        return ('Time out error.');
    } else if (exception === 'abort') {
        return ('Ajax request aborted.');
    } else {
        return ('Uncaught Error.\n' + jqXHR.responseText);
    }
}


function nuAjax(pCode, pFunctionName){

		var P       = new nuCopyJSObject(nuFORM);
        P.form_data = nuGetData();
        P.phpCode   = pCode;
		var request = $.ajax({
		url      : "nucallsecure.php?c="+pCode,
		type     : "POST",
		data     : {nuWindow : P},
		dataType : "json",
		async	 :  false
		}).done(function(data){
		
		if(nuErrorMessage(data.ERRORS, false)){
			return;
		}
			
		if(arguments.length == 1){return;}   //-- no js function to run

		window[pFunctionName](data.DATA);

	});
}

function nuSetHash(name, value){
	nuFORM[name] = value;
}

function nuGetHash(name){
	return nuFORM[name];
}


function nuRemoveModal(){

	document.defaultView.parent.$('#nuModal').remove();	
	document.defaultView.parent.$('#nuDrag').remove();

}

function nuTimeStamp(value){

	if(arguments.length == 1){
		localStorage.setItem(nuFORM.session_id, value);
	}else{
		return localStorage[nuFORM.session_id];
	}

}


function nuObjectColors(o){

    return 'nu_' + o;
    
}


function nuFieldTitle(f, l){                   //-- formats f ('cus_street_name' becomes 'Street Name' if other strings in l start with cus)

	var t = Array();

	for(var i = 0 ; i < l.length ; i ++){
	
		if(f != l[i] && f.split('_').length > 1 && f.split('_')[0] == l[i].split('_')[0]){
		
			for(var s = 1 ; s < f.split('_').length ; s ++){
			
				t.push(f.split('_')[s].charAt(0).toUpperCase() + f.split('_')[s].slice(1));
				
			}
			
			return t.join(' ');
			
		}
		
	}

	for(var s = 0 ; s < f.split('_').length ; s ++){
	
		t.push(f.split('_')[s].charAt(0).toUpperCase() + f.split('_')[s].slice(1));
		
	}
	
	return t.join(' ');
		
}

function nuFile(c){

	return 'nufileget.php?' + c + '&t=' + new Date().getTime();

}

