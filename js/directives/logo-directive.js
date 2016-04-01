angular.module('devLoftApp').directive('logoDirective', function() {
  return {
    template: `<svg version="1.1" class="logo-effect" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="220px" height:"40px" viewBox="0 0 85.5 25" style="enable-background:new 0 0 85.5 25;" xml:space="preserve">
<style type="text/css">

  .logo-effect {
    cursor: pointer;
  }
  .logo-effect * {
    -webkit-transition: .7s;
    -moz-transition: .7s;
    transition: .7s;
  }
  .logo-effect .logo-effect-stroke * {
    stroke-width: 4;
    stroke: none;
    fill: #FFFFFF;
  }
  .logo-effect:hover .logo-effect-stroke * {
    stroke: #FFFFFF;
    stroke-width: 0.5;
    fill: none
  }
</style>
<g>
	<g class="logo-effect-stroke">
		<path class="" d="M47.096,9.692h2.453v6.874h3.362v2.466h-5.815V9.692z"/>
		<path class="" d="M58.764,9.692c2.578,0,4.67,2.104,4.67,4.682c0,2.578-2.092,4.657-4.67,4.657
			c-2.578,0-4.657-2.08-4.657-4.657C54.107,11.797,56.186,9.692,58.764,9.692z M58.764,12.133c-1.22,0-2.217,0.996-2.217,2.229
			c0,1.22,0.996,2.229,2.217,2.229c1.233,0,2.229-1.009,2.229-2.229C60.993,13.129,59.997,12.133,58.764,12.133z"/>
		<path class="" d="M65.14,9.692h5.852v2.017h-3.399v1.519h3.001v2.08h-3.001v3.723H65.14V9.692z"/>
		<path class="" d="M72.55,9.68h7.359v2.441h-2.478v6.911h-2.453V12.12H72.55V9.68z"/>
	</g>
	<g class="logo-effect-stroke" >
		<path class="" d="M18.537,9.718h3.462c2.578,0,4.67,2.092,4.67,4.67s-2.092,4.67-4.67,4.67h-3.462V9.718z M20.978,16.616h1.033
			c1.22,0,2.217-0.996,2.217-2.217c0-1.208-0.996-2.204-2.217-2.204h-1.033V16.616z"/>
		<path class="st4" d="M28.362,9.718h5.803v2.03h-3.35v1.519h2.964v2.067h-2.964v1.718h3.35v2.005h-5.803V9.718z"/>
		<path class="st4" d="M44.924,9.705l-4.346,9.352h-1.121L35.1,9.705h2.466l2.453,5.317l2.466-5.317H44.924z"/>
	</g>
	<g class="logo-effect-stroke">
		<g class="logo-effect-stroke">
			<path class="" d="M7.419,14.46l-2.008-2.008l2.906-2.906L5.565,6.795l2.018-2.018l4.76,4.76L7.419,14.46z"/>
		</g>
	</g>
	<g class="logo-effect-stroke">
		<g class="logo-effect-stroke">
			<path class="" d="M13.801,9.459l2.008,2.008l-2.906,2.906l2.752,2.752l-2.018,2.018l-4.76-4.76L13.801,9.459z"/>
		</g>
	</g>
</g>
</svg>
`
  }
})
