<!DOCTYPE html> 
<html lang='en'> 
    <head> 
		<meta charset='utf-8'>
		<meta http-equiv='X-UA-Compatible' content='chrome=1'>
		
		
		<title>Moradas Club Santa Maria</title>
		<link rel='stylesheet' href='https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css'> 
		<link rel='stylesheet' href='style.css'>
	</head>
    <body>
		
		
		<div class="fases">
			<h3>Fase A</h3>
			<div class="item">
				<div class="mn_mapa"></div>
				<div class="mapa faseA">
					<div class="map_faseA"></div>
					<div class="map_itens"></div>
				</div>
			</div>
			<h3>Fase B</h3>
			<div class="item">
				<div class="mn_mapa"></div>
				<div class="mapa faseB">
					<div class="map_faseB"></div>
					<div class="map_itens"></div>
				</div>
			</div>
		</div>
		
		<script src='https://code.jquery.com/jquery-1.12.0.min.js'></script> 
		<script src='https://code.jquery.com/ui/1.11.4/jquery-ui.js'></script> 
		
		<script src='scripts01.js'></script>
		<script src='scripts.js'></script>

		<script type="text/javascript">
			jQuery(document).ready(function() {
				//tc_move.init();
				
				
				MC.init();
				japp.init();
			});
		</script>
    </body>
</html>
