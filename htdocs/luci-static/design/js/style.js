(function ($) {

    // 修复某些插件导致在https下env(safe-area-inset-bottom)为0的情况
    var url = self.location.href; 
    if ((/(iPhone|iPad|iPod|iOS|Mac|Macintosh)/i.test(navigator.userAgent)) && url.indexOf("openclash") != -1 ) {
        var oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover';
        oMeta.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
    }

		// 设置indicators图标，(放在menu script执行之前passwall某些代码错误中断导致失败)
		const callback = function (mutationsList, observer) {
			const firstChild = document.querySelector("#indicators > :first-child");
			if (firstChild && firstChild.getAttribute("data-indicator") !== "uci-changes") {
				firstChild.textContent = '\ue6b9';
			}
		}
		const observer = new MutationObserver(callback);
		const config = { childList: true, attributes: true, subtree: true };
		const targetNode = document.getElementById("indicators");
		observer.observe(targetNode, config);

		// 监听窗口大小，动态设置header box阴影长度
        $(window).resize( function  () {
			if (window.innerWidth <= 992) {
				$("header").css("box-shadow",   "0 2px 4px rgb(0 0 0 / 8%)")
			} else {
				$("header").css("box-shadow",   "17rem 2px 4px rgb(0 0 0 / 8%)")
			}
        });
})(jQuery);