var MC = {

	jposte : $('<div />').addClass('poste'),
	
	jluminaria : $('<div />').addClass('luminaria'),
	
	jcasa : $('<div />').addClass('casa').append(
		$('<div />').addClass('c1'),
		$('<div />').addClass('c2'),
		$('<div />').addClass('c3'),
		$('<div />').addClass('c4'),
		$('<div />').addClass('c5'),
		$('<div />').addClass('c6'),
		$('<div />').addClass('c7'),
		$('<div />').addClass('c8')
	),
	
	init : function(){
		MC.faseA();
		MC.faseB();
		
		setTimeout(function(){
			$('.mapa').draggable();
		},100);
	},
	
	str_pad : function(input, pad_length, pad_string, pad_type) {
		//  discuss at: http://phpjs.org/functions/str_pad/
		// original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// improved by: Michael White (http://getsprink.com)
		//    input by: Marco van Oort
		// bugfixed by: Brett Zamir (http://brett-zamir.me)
		//   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
		//   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
		//   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
		//   returns 2: '------Kevin van Zonneveld-----'

		var half = '',
		pad_to_go;

		var str_pad_repeater = function(s, len) {
			var collect = '',
			i;

			while (collect.length < len) {
				collect += s;
			}
			collect = collect.substr(0, len);

			return collect;
		};

		input += '';
		pad_string = pad_string !== undefined ? pad_string : ' ';

		if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
			pad_type = 'STR_PAD_RIGHT';
		}
		if ((pad_to_go = pad_length - input.length) > 0) {
			if (pad_type === 'STR_PAD_LEFT') {
				input = str_pad_repeater(pad_string, pad_to_go) + input;
			} else if (pad_type === 'STR_PAD_RIGHT') {
				input = input + str_pad_repeater(pad_string, pad_to_go);
			} else if (pad_type === 'STR_PAD_BOTH') {
				half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
				input = half + input + half;
				input = input.substr(0, pad_length);
			}
		}

		return input;
	},
	
	crHome : function(fase, home, top, left, xy){
		if(xy == 'Y'){
			for (var tp = top, lt = left, xy = 'Y', rt = 180, i = home.length-1; i >= 0; i--, lt -= 52.5525, xy = (xy == 'Y')?'X':'Y', rt = (rt == 0)?180:0){
				var casa = MC.str_pad(home[i], 3, 0, 'STR_PAD_LEFT' );
				fase.append( 
					MC.jcasa.clone().attr({'casa': casa}).css({
						'top': tp,
						'left': lt,
						'-webkit-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-moz-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-ms-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-o-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'transform': 'rotate'+ xy +'('+ rt +'deg)', 
					})
					.on({/*
						mouseenter: function() {
							$(this).find('div').css({'border':'3px solid red', 'background-color':'red'});
							$(this).find('.c7, .c8').show();
						},
						mouseleave: function() {
							$(this).find('div').css({'border':'1px solid black', 'background-color':'black'});
							$(this).find('.c7, .c8').hide();
						},
						*/
						dblclick: function(){
							$(this).find('div').css({'border':'1px solid black', 'background-color':'black'});
							$(this).find('.c7, .c8').hide();
							
							var kasa = $(this).attr('casa');
							//MC.msg(kasa);
							japp.fm_(kasa);
						}
					})
				);
			}
		}
		if(xy == 'X'){
			for (var tp = top, lt = left, xy = 'X', rt = 180, i = home.length-1; i >= 0; i--, lt += 52.5525, xy = (xy == 'Z')?'X':'Z', rt = 180){
				var casa = MC.str_pad(home[i], 3, 0, 'STR_PAD_LEFT' );
				fase.append( 
					MC.jcasa.clone().attr({'casa': casa}).css({
						'top': tp,
						'left': lt,
						'-webkit-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-moz-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-ms-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'-o-transform': 'rotate'+ xy +'('+ rt +'deg)',
						'transform': 'rotate'+ xy +'('+ rt +'deg)', 
					})
					.on({
						/*
						mouseenter: function() {
							$(this).find('div').css({'border':'3px solid red', 'background-color':'red'});
							$(this).find('.c7, .c8').show();
						},
						mouseleave: function() {
							$(this).find('div').css({'border':'1px solid black', 'background-color':'black'});
							$(this).find('.c7, .c8').hide();
						},
						*/
						dblclick: function(){
							$(this).find('div').css({'border':'1px solid black', 'background-color':'black'});
							$(this).find('.c7, .c8').hide();
							
							var kasa = $(this).attr('casa');
							//MC.msg(kasa); 
							japp.fm_(kasa);
						}
					})
				);
			}
		}
	},
	
	faseA : function(){
		
		var fase = $('.faseA').find('.map_itens');
	
		var luminarias = {
			l01 : { 'top': 467, 'left': 1806},
			l02 : { 'top': 467, 'left': 1568},
			l03 : { 'top': 467, 'left': 1356},
			l04 : { 'top': 467, 'left': 1146},
			l05 : { 'top': 467, 'left': 935},
			l06 : { 'top': 467, 'left': 724},
			l07 : { 'top': 467, 'left': 513},
			l08 : { 'top': 467, 'left': 247},
			l09 : { 'top': 277, 'left': 535},
			l10 : { 'top': 277, 'left': 747},
			l11 : { 'top': 277, 'left': 956},
			l12 : { 'top': 277, 'left': 1168},
			l13 : { 'top': 277, 'left': 1486},
			l14 : { 'top': 1348, 'left': 1780},
			l15 : { 'top': 1348, 'left': 1562},
			l16 : { 'top': 1348, 'left': 1354},
			l17 : { 'top': 1348, 'left': 1142},
			l18 : { 'top': 1348, 'left': 932},
			l19 : { 'top': 1348, 'left': 723},
			l20 : { 'top': 1348, 'left': 512},
			l21 : { 'top': 1348, 'left': 302}
		};
		
		var postes = {
			p01 : { 'top': 1370, 'left': 1814},
			p02 : { 'top': 1135, 'left': 2128},
			p03 : { 'top': 1113, 'left': 1904},
			p04 : { 'top': 1006, 'left': 1886},
			p05 : { 'top': 780, 'left': 1887},
			p06 : { 'top': 352, 'left': 1893},
			p07 : { 'top': 299, 'left': 1722},
			p08 : { 'top': 308, 'left': 1461},
			p09 : { 'top': 308, 'left': 448},
			p10 : { 'top': 308, 'left': 290},
			p11 : { 'top': 437, 'left': 232},
			p12 : { 'top': 513, 'left': 175},
			p13 : { 'top': 671, 'left': 177},
			p14 : { 'top': 861, 'left': 177},
			p15 : { 'top': 1313, 'left': 177},
			p16 : { 'top': 928, 'left': 409},
			p17 : { 'top': 928, 'left': 829},
			p18 : { 'top': 928, 'left': 1144},
			p19 : { 'top': 928, 'left': 1356},
			p20 : { 'top': 928, 'left': 1670}
		};

		$( ".poste" ).draggable({
			stop: function(e) {
				var lf = $(this).position().left;
				var tp = $(this).position().top;

				console.log( tp, lf );
			}
		});

		$.each(postes, function(p, obj){
			fase
				.append( 
					MC.jposte.clone()
						.attr({'poste': p, 'title': 'Poste'})
						.css({'top': obj.top, 'left': obj.left}) 
						.on('click', function(){ 
							var poste = $(this).attr('poste'); 
							MC.msg(poste);
						})
						.tooltip()
				);
		});
		
		$.each(luminarias, function(l, obj){
			fase
				.append( 
					MC.jluminaria.clone()
						.attr({'luminaria': l, 'title': 'Luminária'})
						.css({'top': obj.top, 'left': obj.left}) 
						.on('click', function(){ 
							var luminaria = $(this).attr('luminaria'); 
							MC.msg(luminaria);
						})
						.tooltip()
				);
		});
		
		MC.crHome(fase, new Array(30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,09,08,07,06,05,04,03,02,01), 1144, 1737, 'Y');
		MC.crHome(fase, new Array(89,87,85,83,81,79,77,75,73,71,69,67,65,63,61,59,57,55,53,51,49,47,45,43,41,39,37,35,33,31), 967, 212, 'X');
		MC.crHome(fase, new Array(32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90), 677, 1737, 'Y');
		MC.crHome(fase, new Array(91,92,93,94,95,96,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,134,135,136,137,138), 500, 212, 'X');
		MC.crHome(fase, new Array(132,130,128,126,124,122,120,118,116,114,112,110,108,106,104,102,100,98), 72, 1442, 'Y');
	},
	
	faseB : function(){
		var fase = $('.faseB').find('.map_itens');
		
		MC.crHome(fase, new Array(228,227,226,225,224,223), 103, 43, 'X');
		MC.crHome(fase, new Array(165,167,169,171,173,175,177,179), 280, 410.8, 'Y');
		MC.crHome(fase, new Array(181,183,185,187,189,191,193,195,197,199,201,203), 280, 1113.8, 'Y');
		MC.crHome(fase, new Array(205,207,209,211,213,215,217,219), 280, 1600.8, 'Y');
		MC.crHome(fase, new Array(180,178,176,174,172,170,168,166), 570, 43, 'X');
		MC.crHome(fase, new Array(222,221,220,218,216,214,212,210,208,206,204,202,200,198,196,194,192,190,188,186,184,182), 570, 537, 'X');
		MC.crHome(fase, new Array(164,163,162,160,158,156,154,152), 747, 410.8, 'Y');
		MC.crHome(fase, new Array(150,148,146,144,142,140,138,136,134,132,130,128,126,124,122,120,118,116,114,112,110,108), 747, 1641.4, 'Y');
		MC.crHome(fase, new Array(103,104,105,106,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,143,155,157,159,161), 1170, 158, 'X');
		MC.crHome(fase, new Array(36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102), 1347, 1889.18, 'Y');
		MC.crHome(fase, new Array(101,99,97,95,93,91,89,87,85,83,81,79,77,75,73,71,69,67,65,63,61,59,57,55,53,51,49,47,45,43,41,39,37,35), 1632, 158.23, 'X');
		MC.crHome(fase, new Array(34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1), 1809, 1891.78, 'Y');		
	}

};


var japp = {
	init : function(){
		japp.mn_();
		japp.mn_mapa();
	},
	
	mn_ : function(){
		
		$( ".fases" ).accordion({
			event: "click",
			minHeight: 900,
			active: false,
			collapsible: true,
			autoHeight: true
		});
	},
	mn_mapa : function(){
		$('.mn_mapa').each(function(){
			$(this).append(
				$('<div />')
					.addClass('opcoes ui-corner-all ui-widget ui-widget-content')
					.css({'font-size':'9pt'})
					.append(
						$('<p />').append(
							'Casa: ',
							$('<input />',{'type':'text', 'name':'casa'}).addClass("text ui-widget-content ui-corner-all").css({'text-align':'center','width':'50px'}),
							$('<button />')
								.text('Localizar')
								.button({
									icons: {
										primary: "ui-icon-search"
									},
									text: true
								}).on('click', function(){
									var cs = MC.str_pad( $(this).closest('.mn_mapa').find("input[name='casa']").val() , 3, 0, 'STR_PAD_LEFT' );
									var ks = $(this).closest('.item').find(".mapa div[casa='"+ cs +"']");
									if(ks.length){
										var ps = ks.offset();

										var lf = $(this).closest('.item').width() / 2;
										var tp = $(this).closest('.item').height() / 4;
										$(this).closest('.item').animate({
											scrollTop: ps.top - tp,
											scrollLeft: ps.left - lf
										}, 2000);

										ks.find('div').css({'border':'3px solid red', 'background-color':'red'});
										ks.find('.c7, .c8').show();
									}else alert('Casa não encontrada');
								})
						),
						$('<p />').append(
							'Zoom: ', 
							$('<div />')
								.css({
									'width': '70%',
									'margin-left': '53px',
									'margin-top': '-12px'
								})
								.slider({
									range: 'max',
									step: 1,
									min: 50,
									max: 100,
									value: 100,
									slide: function( event, ui ) {
										var val = ui.value/100;
										$(this).find('.ui-slider-handle').css({'width':'31px'}).text(parseInt(val*100)+'%');
										$(this).closest('.item').find('.mapa').css({'transform': 'translate3d(-200px,-200px,0) scale3d('+ val +','+ val +','+ val +')'});
									}
								})
						)
					)
				);
			});		
	},
	
	fm_ : function(home){
	
		var jdialog = $('<div />')
			.load('cadastro.php', function(){
				japp.fm_cadastro($(this), home);
			})
			.dialog({
				title: 'Cadastro de Condômino',
				resizable: false,
				width: (parseInt($(window).width()*0.90)), 
				height: (parseInt($(window).height()*0.90)),
				top: ($(document).height()),
				left: ($(window).width()),
				modal: true,
				buttons: {
					'Salvar' : function(){

					},
					'Fechar' : function(){
						$(this).dialog( "close" );

					}
				},
				close : function(){
					$(this).dialog( "destroy" );
				}
			});
	},
	
	fm_cadastro : function(_this, home){
		_this.find('.fm_imovel').tabs({
			create : function(){
				
			},
			activate: function(event, ui) {
				var idT = ui.newTab.index();
				switch(idT){
					case 1:
					break;
				}
			}
		});
	}

};
