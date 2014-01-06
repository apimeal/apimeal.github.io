 $(function () {
	$(".diagram-container").on("click", ".expendable", function() {
		$(".diagram-container").fadeOut( "fast", function() {
			$(".diagram-container").html('<div class="diagram"><div class="line" style="width:100px;"></div><div class="rect sub expendable1">Connection</div><div class="line" style="width:100px;"></div><div class="rect sub expendable2">ParseRequest</div><div class="angle-line" style="width:70px;"></div><div class="middle"><div class="line top" style="width:70px;"></div><div class="rect right sub expendable3">GetContent</div></div><div class="line left" style="width:100px;"></div><div class="rect sub expendable5">GenerateResponse</div><div class="line left" style="width:100px;"></div><div class="rect sub expendable4">SendResponse</div><div class="angle-line-down" style="width:60px;"></div></div><div id="backone" class="backone">Retour</div>');
			$(".diagram").css({
				width: "770px",
				margin: "50px auto 25px auto"
			});
		});
		$(".diagram-container").fadeIn( "fast", function() {});
	});
	$(".diagram-container").on("click", ".backone",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="rect first">Initserver</div><div class="line" style="width:200px;"></div><div class="rect expendable" title="Cliquer pour agrandir">ListenServer</div><div class="line" style="width:200px;"></div><div class="rect">CloseServer</div></div>');
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
	$(".diagram-container").on("click", ".backtwo", function() {
		$(".diagram-container").fadeOut( "fast", function() {
			$(".diagram-container").html('<div class="diagram"><div class="line" style="width:100px;"></div><div class="rect sub expendable1">Connection</div><div class="line" style="width:100px;"></div><div class="rect sub expendable2">ParseRequest</div><div class="angle-line" style="width:70px;"></div><div class="middle"><div class="line top" style="width:70px;"></div><div class="rect right sub expendable3">GetContent</div></div><div class="line left" style="width:100px;"></div><div class="rect sub expendable5">GenerateResponse</div><div class="line left" style="width:100px;"></div><div class="rect sub expendable4">SendResponse</div><div class="angle-line-down" style="width:60px;"></div></div><div id="backone" class="backone">Retour</div></div>');
			$(".diagram").css({
				width: "770px",
				margin: "50px auto 25px auto"
			});
		});
		$(".diagram-container").fadeIn( "fast", function() {});
	});
	$(".diagram-container").on("click", ".expendable1",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="line sub-first" style="width:50px;"></div><div class="rect hook">PreConnection<br />(exemple: blacklist)</div><div class="line" style="width:150px;"></div><div class="rect">Connection</div><div class="line" style="width:150px;"></div><div class="rect hook">PostConnection<br />(exemple: SSL)</div><div class="line" style="width:50px;"></div></div><div id="backtwo" class="backtwo">Retour</div>')
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
	$(".diagram-container").on("click", ".expendable2",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="line sub-first" style="width:50px;"></div><div class="rect hook">PreParseRequest<br />(exemple: decoding)</div><div class="line" style="width:150px;"></div><div class="rect">Parse</div><div class="line" style="width:150px;"></div><div class="rect hook">PostParseRequest<br />(exemple: URLRewriting)</div><div class="line" style="width:50px;"></div></div><div id="backtwo" class="backtwo">Retour</div>')
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
	$(".diagram-container").on("click", ".expendable3",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="line sub-first2" style="width:80px;"></div><div class="choice"><div class="rect hook ">PreSendResponse<br />(exemple: SSL)</div><div class="or" s>OU</div><div class="rect">SendResponse</div></div><div class="line" style="width:80px;"></div></div><div id="backtwo" class="backtwo">Retour</div>');
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
	$(".diagram-container").on("click", ".expendable4",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="line sub-first" style="width:50px;"></div><div class="rect hook">PreGenerateResponse<br />(exemple: Module CGI)</div><div class="line" style="width:150px;"></div><div class="rect">GenerateResponse</div><div class="line" style="width:150px;"></div><div class="rect hook">PostGenerateResponse<br />(exemple: encode)</div><div class="line" style="width:50px;"></div></div><div id="backtwo" class="backtwo">Retour</div>');
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
	$(".diagram-container").on("click", ".expendable5",
		function() {
			$(".diagram-container").fadeOut( "fast", function() {
				$(".diagram-container").html('<div class="diagram"><div class="line sub-first2" style="width:80px;"></div><div class="rect hook">PreSendResponse<br />(exemple: SSL)</div><div class="line" style="width:170px;"></div><div class="rect">SendResponse</div><div class="line" style="width:80px;"></div></div><div id="backtwo" class="backtwo">Retour</div>');
				$(".diagram").css({
					width: "none",
					margin: "none"
				});
			});
			$(".diagram-container").fadeIn( "fast", function() {});
		}
	);
});

