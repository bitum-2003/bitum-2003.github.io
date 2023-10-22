// Line 122: parallax speed
// Line 305: additional library - smooth-scroll.js (only for mouse smooth scrolling )
//**************************************
// parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
//https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js
!(function (t, i, e, s) {
	function o(i, e) {
		var h = this;
		"object" == typeof e &&
			(delete e.refresh, delete e.render, t.extend(this, e)),
			(this.$element = t(i)),
			!this.imageSrc &&
				this.$element.is("img") &&
				(this.imageSrc = this.$element.attr("src"));
		var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
		if (
			(r.length < 1 && r.push("center"),
			1 == r.length && r.push(r[0]),
			("top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1]) ||
				(r = [r[1], r[0]]),
			this.positionX !== s && (r[0] = this.positionX.toLowerCase()),
			this.positionY !== s && (r[1] = this.positionY.toLowerCase()),
			(h.positionX = r[0]),
			(h.positionY = r[1]),
			"left" != this.positionX &&
				"right" != this.positionX &&
				(isNaN(parseInt(this.positionX))
					? (this.positionX = "center")
					: (this.positionX = parseInt(this.positionX))),
			"top" != this.positionY &&
				"bottom" != this.positionY &&
				(isNaN(parseInt(this.positionY))
					? (this.positionY = "center")
					: (this.positionY = parseInt(this.positionY))),
			(this.position =
				this.positionX +
				(isNaN(this.positionX) ? "" : "px") +
				" " +
				this.positionY +
				(isNaN(this.positionY) ? "" : "px")),
			navigator.userAgent.match(/(iPod|iPhone|iPad)/))
		)
			return (
				this.imageSrc &&
					this.iosFix &&
					!this.$element.is("img") &&
					this.$element.css({
						backgroundImage: "url(" + this.imageSrc + ")",
						backgroundSize: "cover",
						backgroundPosition: this.position
					}),
				this
			);
		if (navigator.userAgent.match(/(Android)/))
			return (
				this.imageSrc &&
					this.androidFix &&
					!this.$element.is("img") &&
					this.$element.css({
						backgroundImage: "url(" + this.imageSrc + ")",
						backgroundSize: "cover",
						backgroundPosition: this.position
					}),
				this
			);
		this.$mirror = t("<div />").prependTo(this.mirrorContainer);
		var a = this.$element.find(">.parallax-slider"),
			n = !1;
		0 == a.length
			? (this.$slider = t("<img />").prependTo(this.$mirror))
			: ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
			this.$mirror.addClass("parallax-mirror").css({
				visibility: "hidden",
				zIndex: this.zIndex,
				position: "fixed",
				top: 0,
				left: 0,
				overflow: "hidden"
			}),
			this.$slider.addClass("parallax-slider").one("load", function () {
				(h.naturalHeight && h.naturalWidth) ||
					((h.naturalHeight = this.naturalHeight || this.height || 1),
					(h.naturalWidth = this.naturalWidth || this.width || 1)),
					(h.aspectRatio = h.naturalWidth / h.naturalHeight),
					o.isSetup || o.setup(),
					o.sliders.push(h),
					(o.isFresh = !1),
					o.requestRender();
			}),
			n || (this.$slider[0].src = this.imageSrc),
			((this.naturalHeight && this.naturalWidth) ||
				this.$slider[0].complete ||
				a.length > 0) &&
				this.$slider.trigger("load");
	}
	!(function () {
		for (
			var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
			s < e.length && !i.requestAnimationFrame;
			++s
		)
			(i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
				(i.cancelAnimationFrame =
					i[e[s] + "CancelAnimationFrame"] ||
					i[e[s] + "CancelRequestAnimationFrame"]);
		i.requestAnimationFrame ||
			(i.requestAnimationFrame = function (e) {
				var s = new Date().getTime(),
					o = Math.max(0, 16 - (s - t)),
					h = i.setTimeout(function () {
						e(s + o);
					}, o);
				return (t = s + o), h;
			}),
			i.cancelAnimationFrame ||
				(i.cancelAnimationFrame = function (t) {
					clearTimeout(t);
				});
	})(),
		t.extend(o.prototype, {
			/* ======================= */
			/* */ speed: 0.3 /* */,
			/* ======================= */
			bleed: 0,
			zIndex: -100,
			iosFix: !0,
			androidFix: !0,
			position: "center",
			overScrollFix: !1,
			mirrorContainer: "body",
			refresh: function () {
				(this.boxWidth = this.$element.outerWidth()),
					(this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
					(this.boxOffsetTop = this.$element.offset().top - this.bleed),
					(this.boxOffsetLeft = this.$element.offset().left),
					(this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
				var t,
					i = o.winHeight,
					e = o.docHeight,
					s = Math.min(this.boxOffsetTop, e - i),
					h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
					r = (this.boxHeight + (s - h) * (1 - this.speed)) | 0,
					a = ((this.boxOffsetTop - s) * (1 - this.speed)) | 0;
				r * this.aspectRatio >= this.boxWidth
					? ((this.imageWidth = (r * this.aspectRatio) | 0),
					  (this.imageHeight = r),
					  (this.offsetBaseTop = a),
					  (t = this.imageWidth - this.boxWidth),
					  "left" == this.positionX
							? (this.offsetLeft = 0)
							: "right" == this.positionX
							? (this.offsetLeft = -t)
							: isNaN(this.positionX)
							? (this.offsetLeft = (-t / 2) | 0)
							: (this.offsetLeft = Math.max(this.positionX, -t)))
					: ((this.imageWidth = this.boxWidth),
					  (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
					  (this.offsetLeft = 0),
					  (t = this.imageHeight - r),
					  "top" == this.positionY
							? (this.offsetBaseTop = a)
							: "bottom" == this.positionY
							? (this.offsetBaseTop = a - t)
							: isNaN(this.positionY)
							? (this.offsetBaseTop = (a - t / 2) | 0)
							: (this.offsetBaseTop = a + Math.max(this.positionY, -t)));
			},
			render: function () {
				var t = o.scrollTop,
					i = o.scrollLeft,
					e = this.overScrollFix ? o.overScroll : 0,
					s = t + o.winHeight;
				this.boxOffsetBottom > t && this.boxOffsetTop <= s
					? ((this.visibility = "visible"),
					  (this.mirrorTop = this.boxOffsetTop - t),
					  (this.mirrorLeft = this.boxOffsetLeft - i),
					  (this.offsetTop =
							this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
					: (this.visibility = "hidden"),
					this.$mirror.css({
						transform:
							"translate3d(" +
							this.mirrorLeft +
							"px, " +
							(this.mirrorTop - e) +
							"px, 0px)",
						visibility: this.visibility,
						height: this.boxHeight,
						width: this.boxWidth
					}),
					this.$slider.css({
						transform:
							"translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
						position: "absolute",
						height: this.imageHeight,
						width: this.imageWidth,
						maxWidth: "none"
					});
			}
		}),
		t.extend(o, {
			scrollTop: 0,
			scrollLeft: 0,
			winHeight: 0,
			winWidth: 0,
			docHeight: 1 << 30,
			docWidth: 1 << 30,
			sliders: [],
			isReady: !1,
			isFresh: !1,
			isBusy: !1,
			setup: function () {
				function s() {
					if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
					(p = i.pageYOffset), h.render(), i.requestAnimationFrame(s);
				}
				if (!this.isReady) {
					var h = this,
						r = t(e),
						a = t(i),
						n = function () {
							(o.winHeight = a.height()),
								(o.winWidth = a.width()),
								(o.docHeight = r.height()),
								(o.docWidth = r.width());
						},
						l = function () {
							var t = a.scrollTop(),
								i = o.docHeight - o.winHeight,
								e = o.docWidth - o.winWidth;
							(o.scrollTop = Math.max(0, Math.min(i, t))),
								(o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft()))),
								(o.overScroll = Math.max(t - i, Math.min(t, 0)));
						};
					a
						.on("resize.px.parallax load.px.parallax", function () {
							n(), h.refresh(), (o.isFresh = !1), o.requestRender();
						})
						.on("scroll.px.parallax load.px.parallax", function () {
							l(), o.requestRender();
						}),
						n(),
						l(),
						(this.isReady = !0);
					var p = -1;
					s();
				}
			},
			configure: function (i) {
				"object" == typeof i &&
					(delete i.refresh, delete i.render, t.extend(this.prototype, i));
			},
			refresh: function () {
				t.each(this.sliders, function () {
					this.refresh();
				}),
					(this.isFresh = !0);
			},
			render: function () {
				this.isFresh || this.refresh(),
					t.each(this.sliders, function () {
						this.render();
					});
			},
			requestRender: function () {
				var t = this;
				t.render(), (t.isBusy = !1);
			},
			destroy: function (e) {
				var s,
					h = t(e).data("px.parallax");
				for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
					this.sliders[s] == h && this.sliders.splice(s, 1);
				t(e).data("px.parallax", !1),
					0 === this.sliders.length &&
						(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
						(this.isReady = !1),
						(o.isSetup = !1));
			}
		});
	var h = t.fn.parallax;
	(t.fn.parallax = function (s) {
		return this.each(function () {
			var h = t(this),
				r = "object" == typeof s && s;
			this == i || this == e || h.is("body")
				? o.configure(r)
				: h.data("px.parallax")
				? "object" == typeof s && t.extend(h.data("px.parallax"), r)
				: ((r = t.extend({}, h.data(), r)), h.data("px.parallax", new o(this, r))),
				"string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
		});
	}),
		(t.fn.parallax.Constructor = o),
		(t.fn.parallax.noConflict = function () {
			return (t.fn.parallax = h), this;
		}),
		t(function () {
			t('[data-parallax="scroll"]').parallax();
		});
})(jQuery, window, document);

//************************************************
// Smooth-scroll library - only for mouse scrolling
!(function () {
	function e() {
		if (!z && document.body) {
			z = !0;
			var e = document.body,
				t = document.documentElement,
				o = window.innerHeight,
				r = e.scrollHeight;
			if (
				((L = document.compatMode.indexOf("CSS") >= 0 ? t : e),
				(g = e),
				T.keyboardSupport && f("keydown", n),
				top != self)
			)
				C = !0;
			else if (ee && r > o && (e.offsetHeight <= o || t.offsetHeight <= o)) {
				var a,
					l = document.createElement("div");
				if (
					((l.style.cssText =
						"position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
						L.scrollHeight +
						"px"),
					document.body.appendChild(l),
					(x = function () {
						a ||
							(a = setTimeout(function () {
								B ||
									((l.style.height = "0"),
									(l.style.height = L.scrollHeight + "px"),
									(a = null));
							}, 500));
					}),
					setTimeout(x, 10),
					f("resize", x),
					(S = new I(x)).observe(e, {
						attributes: !0,
						childList: !0,
						characterData: !1
					}),
					L.offsetHeight <= o)
				) {
					var i = document.createElement("div");
					(i.style.clear = "both"), e.appendChild(i);
				}
			}
			T.fixedBackground ||
				B ||
				((e.style.backgroundAttachment = "scroll"),
				(t.style.backgroundAttachment = "scroll"));
		}
	}
	function t(e, t, o) {
		var n, r;
		if (
			((n = (n = t) > 0 ? 1 : -1),
			(r = (r = o) > 0 ? 1 : -1),
			(H.x !== n || H.y !== r) && ((H.x = n), (H.y = r), (N = []), (P = 0)),
			1 != T.accelerationMax)
		) {
			var a = Date.now() - P;
			if (a < T.accelerationDelta) {
				var l = (1 + 50 / a) / 2;
				l > 1 && ((l = Math.min(l, T.accelerationMax)), (t *= l), (o *= l));
			}
			P = Date.now();
		}
		if (
			(N.push({
				x: t,
				y: o,
				lastX: 0 > t ? 0.99 : -0.99,
				lastY: 0 > o ? 0.99 : -0.99,
				start: Date.now()
			}),
			!K)
		) {
			var i = _(),
				c = e === i || e === document.body;
			null == e.$scrollBehavior &&
				(function (e) {
					var t = $(e);
					if (null == q[t]) {
						var o = getComputedStyle(e, "")["scroll-behavior"];
						q[t] = "smooth" == o;
					}
					return q[t];
				})(e) &&
				((e.$scrollBehavior = e.style.scrollBehavior),
				(e.style.scrollBehavior = "auto"));
			var s = function (n) {
				for (var r = Date.now(), a = 0, l = 0, i = 0; i < N.length; i++) {
					var u = N[i],
						d = r - u.start,
						f = d >= T.animationTime,
						m = f ? 1 : d / T.animationTime;
					T.pulseAlgorithm && (m = y(m));
					var h = (u.x * m - u.lastX) >> 0,
						w = (u.y * m - u.lastY) >> 0;
					(a += h),
						(l += w),
						(u.lastX += h),
						(u.lastY += w),
						f && (N.splice(i, 1), i--);
				}
				c
					? window.scrollBy(a, l)
					: (a && (e.scrollLeft += a), l && (e.scrollTop += l)),
					t || o || (N = []),
					N.length
						? F(s, e, 1e3 / T.frameRate + 1)
						: ((K = !1),
						  null != e.$scrollBehavior &&
								((e.style.scrollBehavior = e.$scrollBehavior),
								(e.$scrollBehavior = null)));
			};
			F(s, e, 0), (K = !0);
		}
	}
	function o(o) {
		z || e();
		var n = o.target;
		if (o.defaultPrevented || o.ctrlKey) return !0;
		if (
			h(g, "embed") ||
			(h(n, "embed") && /\.pdf/i.test(n.src)) ||
			h(g, "object") ||
			n.shadowRoot
		)
			return !0;
		var r = -o.wheelDeltaX || o.deltaX || 0,
			l = -o.wheelDeltaY || o.deltaY || 0;
		X &&
			(o.wheelDeltaX &&
				w(o.wheelDeltaX, 120) &&
				(r = (o.wheelDeltaX / Math.abs(o.wheelDeltaX)) * -120),
			o.wheelDeltaY &&
				w(o.wheelDeltaY, 120) &&
				(l = (o.wheelDeltaY / Math.abs(o.wheelDeltaY)) * -120)),
			r || l || (l = -o.wheelDelta || 0),
			1 === o.deltaMode && ((r *= 40), (l *= 40));
		var i = c(n);
		return i
			? !!(function (e) {
					if (e) {
						O.length || (O = [e, e, e]),
							(e = Math.abs(e)),
							O.push(e),
							O.shift(),
							clearTimeout(k),
							(k = setTimeout(function () {
								try {
									localStorage.SS_deltaBuffer = O.join(",");
								} catch (e) {}
							}, 1e3));
						var t = e > 120 && p(e),
							o = !p(120) && !p(100) && !t;
						return 50 > e || o;
					}
			  })(l) ||
					(Math.abs(r) > 1.2 && (r *= T.stepSize / 120),
					Math.abs(l) > 1.2 && (l *= T.stepSize / 120),
					t(i, r, l),
					o.preventDefault(),
					void a())
			: !C ||
					!G ||
					(Object.defineProperty(o, "target", { value: window.frameElement }),
					parent.wheel(o));
	}
	function n(e) {
		var o = e.target,
			n =
				e.ctrlKey ||
				e.altKey ||
				e.metaKey ||
				(e.shiftKey && e.keyCode !== Y.spacebar);
		document.body.contains(g) || (g = document.activeElement);
		var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (
			e.defaultPrevented ||
			/^(textarea|select|embed|object)$/i.test(o.nodeName) ||
			(h(o, "input") && !r.test(o.type)) ||
			h(g, "video") ||
			(function (e) {
				var t = e.target,
					o = !1;
				if (-1 != document.URL.indexOf("www.youtube.com/watch"))
					do
						if ((o = t.classList && t.classList.contains("html5-video-controls")))
							break;
					while ((t = t.parentNode));
				return o;
			})(e) ||
			o.isContentEditable ||
			n
		)
			return !0;
		if (
			(h(o, "button") || (h(o, "input") && r.test(o.type))) &&
			e.keyCode === Y.spacebar
		)
			return !0;
		if (h(o, "input") && "radio" == o.type && A[e.keyCode]) return !0;
		var l = 0,
			i = 0,
			s = c(g);
		if (!s) return !C || !G || parent.keydown(e);
		var u = s.clientHeight;
		switch ((s == document.body && (u = window.innerHeight), e.keyCode)) {
			case Y.up:
				i = -T.arrowScroll;
				break;
			case Y.down:
				i = T.arrowScroll;
				break;
			case Y.spacebar:
				i = -(e.shiftKey ? 1 : -1) * u * 0.9;
				break;
			case Y.pageup:
				i = 0.9 * -u;
				break;
			case Y.pagedown:
				i = 0.9 * u;
				break;
			case Y.home:
				s == document.body &&
					document.scrollingElement &&
					(s = document.scrollingElement),
					(i = -s.scrollTop);
				break;
			case Y.end:
				var d = s.scrollHeight - s.scrollTop - u;
				i = d > 0 ? d + 10 : 0;
				break;
			case Y.left:
				l = -T.arrowScroll;
				break;
			case Y.right:
				l = T.arrowScroll;
				break;
			default:
				return !0;
		}
		t(s, l, i), e.preventDefault(), a();
	}
	function r(e) {
		g = e.target;
	}
	function a() {
		clearTimeout(M),
			(M = setInterval(function () {
				j = R = q = {};
			}, 1e3));
	}
	function l(e, t, o) {
		for (var n = o ? j : R, r = e.length; r--; ) n[$(e[r])] = t;
		return t;
	}
	function i(e, t) {
		return (t ? j : R)[$(e)];
	}
	function c(e) {
		var t = [],
			o = document.body,
			n = L.scrollHeight;
		do {
			var r = i(e, !1);
			if (r) return l(t, r);
			if ((t.push(e), n === e.scrollHeight)) {
				var a = (u(L) && u(o)) || d(L);
				if ((C && s(L)) || (!C && a)) return l(t, _());
			} else if (s(e) && d(e)) return l(t, e);
		} while ((e = e.parentElement));
	}
	function s(e) {
		return e.clientHeight + 10 < e.scrollHeight;
	}
	function u(e) {
		return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
	}
	function d(e) {
		var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return "scroll" === t || "auto" === t;
	}
	function f(e, t, o) {
		window.addEventListener(e, t, o || !1);
	}
	function m(e, t, o) {
		window.removeEventListener(e, t, o || !1);
	}
	function h(e, t) {
		return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
	}
	function w(e, t) {
		return Math.floor(e / t) == e / t;
	}
	function p(e) {
		return w(O[0], e) && w(O[1], e) && w(O[2], e);
	}
	function v(e) {
		var t, o;
		return (
			(e *= T.pulseScale) < 1
				? (t = e - (1 - Math.exp(-e)))
				: ((e -= 1), (t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o))),
			t * T.pulseNormalize
		);
	}
	function y(e) {
		return e >= 1
			? 1
			: 0 >= e
			? 0
			: (1 == T.pulseNormalize && (T.pulseNormalize /= v(1)), v(e));
	}
	function b(e) {
		for (var t in e) E.hasOwnProperty(t) && (T[t] = e[t]);
	}
	var g,
		S,
		x,
		k,
		D,
		M,
		E = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 120,
			pulseAlgorithm: !0,
			pulseScale: 4,
			pulseNormalize: 1,
			accelerationDelta: 50,
			accelerationMax: 3,
			keyboardSupport: !0,
			arrowScroll: 50,
			fixedBackground: !0,
			excluded: ""
		},
		T = E,
		B = !1,
		C = !1,
		H = { x: 0, y: 0 },
		z = !1,
		L = document.documentElement,
		O = [],
		X = /^Mac/.test(navigator.platform),
		Y = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36
		},
		A = { 37: 1, 38: 1, 39: 1, 40: 1 },
		N = [],
		K = !1,
		P = Date.now(),
		$ =
			((D = 0),
			function (e) {
				return e.uniqueID || (e.uniqueID = D++);
			}),
		j = {},
		R = {},
		q = {};
	if (window.localStorage && localStorage.SS_deltaBuffer)
		try {
			O = localStorage.SS_deltaBuffer.split(",");
		} catch (g) {}
	var V,
		F =
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function (e, t, o) {
				window.setTimeout(e, o || 1e3 / 60);
			},
		I =
			window.MutationObserver ||
			window.WebKitMutationObserver ||
			window.MozMutationObserver,
		_ =
			((V = document.scrollingElement),
			function () {
				if (!V) {
					var e = document.createElement("div");
					(e.style.cssText = "height:10000px;width:1px;"),
						document.body.appendChild(e);
					var t = document.body.scrollTop;
					document.documentElement.scrollTop,
						window.scrollBy(0, 3),
						(V =
							document.body.scrollTop != t ? document.body : document.documentElement),
						window.scrollBy(0, -3),
						document.body.removeChild(e);
				}
				return V;
			}),
		W = window.navigator.userAgent,
		U = /Edge/.test(W),
		G = /chrome/i.test(W) && !U,
		J = /safari/i.test(W) && !U,
		Q = /mobile/i.test(W),
		Z = /Windows NT 6.1/i.test(W) && /rv:11/i.test(W),
		ee = J && (/Version\/8/i.test(W) || /Version\/9/i.test(W)),
		te = (G || J || Z) && !Q,
		oe = !1;
	try {
		window.addEventListener(
			"test",
			null,
			Object.defineProperty({}, "passive", {
				get: function () {
					oe = !0;
				}
			})
		);
	} catch (g) {}
	var ne = !!oe && { passive: !1 },
		re = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
	re && te && (f(re, o, ne), f("mousedown", r), f("load", e)),
		(b.destroy = function () {
			S && S.disconnect(),
				m(re, o),
				m("mousedown", r),
				m("keydown", n),
				m("resize", x),
				m("load", e);
		}),
		window.SmoothScrollOptions && b(window.SmoothScrollOptions),
		"function" == typeof define && define.amd
			? define(function () {
					return b;
			  })
			: "object" == typeof exports
			? (module.exports = b)
			: (window.SmoothScroll = b);
})();
