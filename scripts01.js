var tc_move	= {
	init : function(){
		tc_move.captureKey();
		
		$('.mapa').append( tc_move.showKeys() );
		
	},
	showKeys : function(){
		/*return $('<div />').addClass('teclas-mobile').css({'float': 'left', 'width': '100px'}).append(
			$('<div />').addClass('up').css({'margin': '0 0 3px 33px'}).append(
				$('<img />', {'src':'nav_seta_up.png', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'}),
				$('<div />').css({'margin-left':'-30px'}).append(
					$('<img />', {'src':'nav_seta_left.png', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'}),
					$('<img />', {'src':'nav_seta_down.png', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'}),
					$('<img />', {'src':'nav_seta_right.png', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'})
				)
			)
		);*/
		
		return $('<div />').addClass('teclas-mobile').css({'float': 'left', 'width': '100px'}).append(
			$('<div />').addClass('up').css({'margin': '0 0 3px 33px'}).append(
				$('<div />').css({'background':"url('nav_seta_up.png') center center no-repeat", 'width':'30px', 'height':'31px', 'alt':'UP', 'border':'0'}),
				$('<div />').css({'margin-left':'-30px'}).append(
					$('<div />').css({'background':"url('nav_seta_left.png') center center no-repeat", 'float': 'left', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'}),
					$('<div />').css({'background':"url('nav_seta_down.png') center center no-repeat", 'float': 'left', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'}),
					$('<div />').css({'background':"url('nav_seta_right.png') center center no-repeat", 'float': 'left', 'width':'30', 'height':'31', 'alt':'UP', 'border':'0'})
				)
			)
		);
		
	},
	k_up : function(){
		$('.faseA').animate({ 
			'scrollTop': "-=50px" 
		}, "slow" );
	},
	k_down : function(){
		$('.faseA').animate({ 
			'scrollTop': "+=50px" 
		}, "slow" );
	},
	k_left : function(){
		$('.faseA').animate({ 
			'scrollLeft': "-=50px" 
		}, "slow" );
	},
	k_right : function(){
		$('.faseA').animate({ 
			'scrollLeft': "+=50px" 
		}, "slow" );
	},
	captureKey : function(){
		$(document).on('keydown', function(e) {
			var captured = true;
			switch (e.keyCode) {
				case 38:
					tc_move.k_up();
				break; // up arrow
				case 37:
					if (e.metaKey) {return;}
					tc_move.k_left();
				break; // left arrow
				case 39:
					tc_move.k_right();
				break; // right arrow
				case 40:
					tc_move.k_down();
				break; // down arrow
				
				default:
					captured = false;
			}
			return !captured;
		});
	}

}
				
