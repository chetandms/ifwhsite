if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {
            end: e[i]
        };
        return !1;
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1, s = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0;
        });
        return setTimeout(function() {
            i || t(s).trigger(t.support.transition.end);
        }, e), this;
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        });
    });
}(jQuery), function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]', i = function(i) {
        t(i).on("click", e, this.close);
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function s() {
            r.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this), n = o.attr("data-target");
        n || (n = o.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === n ? [] : n);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), 
        e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s());
    };
    var s = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.alert");
            o || s.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(s);
        });
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this;
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close);
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.button"), n = "object" == typeof e && e;
            o || s.data("bs.button", o = new i(this, n)), "toggle" == e ? o.toggle() : e && o.setState(e);
        });
    }
    var i = function(e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1;
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled", s = this.$element, o = s.is("input") ? "val" : "html", n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[o]()), setTimeout(t.proxy(function() {
            s[o](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, 
            s.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, 
            s.removeClass(i).removeAttr(i).prop(i, !1));
        }, this), 0);
    }, i.prototype.toggle = function() {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), 
            this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), 
            this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), 
            t && i.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = s, this;
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var s = t(i.target).closest(".btn");
        e.call(s, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), 
        s.is("input,button") ? s.trigger("focus") : s.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.carousel"), n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e), r = "string" == typeof e ? e : n.slide;
            o || s.data("bs.carousel", o = new i(this, n)), "number" == typeof e ? o.to(e) : r ? o[r]() : n.interval && o.pause().cycle();
        });
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = i, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            t.preventDefault();
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), 
        this;
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var s = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(s);
    }, i.prototype.to = function(t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t);
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    }, i.prototype.slide = function(e, s) {
        var o = this.$element.find(".item.active"), n = s || this.getItemForDirection(e, o), r = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var c = n[0], h = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(n)]);
                d && d.addClass("active");
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), 
            n[0].offsetWidth, o.addClass(a), n.addClass(a), o.one("bsTransitionEnd", function() {
                n.removeClass([ e, a ].join(" ")).addClass("active"), o.removeClass([ "active", a ].join(" ")), 
                l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u);
                }, 0);
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), n.addClass("active"), 
            this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this;
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this;
    };
    var o = function(i) {
        var s, o = t(this), n = t(o.attr("data-target") || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var r = t.extend({}, n.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault();
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), 
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data());
        });
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s);
    }
    function i(e) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.collapse"), n = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && n.toggle && /show|hide/.test(e) && (n.toggle = !1), o || i.data("bs.collapse", o = new s(this, n)), 
            "string" == typeof e && o[e]();
        });
    }
    var s = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height";
    }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase([ "scroll", r ].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[r](this.$element[0][l]);
                }
            }
        }
    }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : o.call(this);
            }
        }
    }, s.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, s.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
            var o = t(s);
            this.addAriaAndCollapsedClass(e(o), o);
        }, this)).end();
    }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this;
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
        var o = t(this);
        o.attr("data-target") || s.preventDefault();
        var n = e(o), r = n.data("bs.collapse") ? "toggle" : o.data();
        i.call(n, r);
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent();
    }
    function i(i) {
        i && 3 === i.which || (t(s).remove(), t(o).each(function() {
            var s = t(this), o = e(s), n = {
                relatedTarget: this
            };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", n)), 
            i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))));
        }));
    }
    var s = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', n = function(e) {
        t(e).on("click.bs.dropdown", this.toggle);
    };
    n.VERSION = "3.3.7", n.prototype.toggle = function(s) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var n = e(o), r = n.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (n.trigger(s = t.Event("show.bs.dropdown", a)), s.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
            }
            return !1;
        }
    }, n.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var n = e(s), r = n.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && n.find(o).trigger("focus"), 
                s.trigger("click");
                var a = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), 
                    a.eq(l).trigger("focus");
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this), s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new n(this)), "string" == typeof e && s[e].call(i);
        });
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this;
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation();
    }).on("click.bs.dropdown.data-api", o, n.prototype.toggle).on("keydown.bs.dropdown.data-api", o, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown);
}(jQuery), function(t) {
    "use strict";
    function e(e, s) {
        return this.each(function() {
            var o = t(this), n = o.data("bs.modal"), r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](s) : r.show && n.show(s);
        });
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, 
    i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t);
    }, i.prototype.show = function(e) {
        var s = this, o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            s.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var o = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), 
            s.adjustDialog(), o && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? s.$dialog.one("bsTransitionEnd", function() {
                s.$element.trigger("focus").trigger(n);
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n);
        }));
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
        }, this));
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
        });
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, i.prototype.backdrop = function(e) {
        var s = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                s.removeBackdrop(), e && e();
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r();
        } else e && e();
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        });
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this;
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var s = t(this), o = s.attr("href"), n = t(s.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), r = n.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, n.data(), s.data());
        s.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                s.is(":visible") && s.trigger("focus");
            });
        }), e.call(n, r, this);
    });
}(jQuery), function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), 
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--; ) {
            var r = o[n];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), 
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS;
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e;
    }, e.prototype.getDelegateOptions = function() {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) {
            i[t] != s && (e[t] = s);
        }), e;
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), 
        i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), 
        i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show();
        }, i.options.delay.show)) : i.show());
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), 
        !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide();
        }, i.options.delay.hide)) : i.hide();
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !s) return;
            var o = this, n = this.tip(), r = this.getUID(this.type);
            this.setContent(), n.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && n.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(), d = n[0].offsetWidth, u = n[0].offsetHeight;
            if (c) {
                var p = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && h.bottom + u > f.bottom ? "top" : "top" == a && h.top - u < f.top ? "bottom" : "right" == a && h.right + d > f.width ? "left" : "left" == a && h.left - d < f.left ? "right" : a, 
                n.removeClass(p).addClass(a);
            }
            var g = this.getCalculatedOffset(a, h, d, u);
            this.applyPlacement(g, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o);
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m();
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var s = this.tip(), o = s[0].offsetWidth, n = s[0].offsetHeight, r = parseInt(s.css("margin-top"), 10), a = parseInt(s.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                });
            }
        }, e), 0), s.addClass("in");
        var l = s[0].offsetWidth, c = s[0].offsetHeight;
        "top" == i && c != n && (e.top = e.top + n - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var d = /top|bottom/.test(i), u = d ? 2 * h.left - o + l : 2 * h.top - n + c, p = d ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(u, s[0][p], d);
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
    }, e.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
    }, e.prototype.hide = function(i) {
        function s() {
            "in" != o.hoverState && n.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), 
            i && i();
        }
        var o = this, n = t(this.$tip), r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return n.removeClass("in"), 
        t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), 
        this.hoverState = null, this;
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
    }, e.prototype.hasContent = function() {
        return this.getTitle();
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0], s = "BODY" == i.tagName, o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var n = window.SVGElement && i instanceof window.SVGElement, r = s ? {
            top: 0,
            left: 0
        } : n ? null : e.offset(), a = {
            scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }, l = s ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, a, l, r);
    }, e.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - s / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - s / 2,
            left: e.left + e.width
        };
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var n = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - n - r.scroll, l = e.top + n - r.scroll + s;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l);
        } else {
            var c = e.left - n, h = e.left + n + i;
            c < r.left ? o.left = r.left - c : h > r.right && (o.left = r.left + r.width - h);
        }
        return o;
    }, e.prototype.getTitle = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, e.prototype.enable = function() {
        this.enabled = !0;
    }, e.prototype.disable = function() {
        this.enabled = !1;
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, 
        i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), 
            t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
        });
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.tooltip"), n = "object" == typeof i && i;
            !o && /destroy|hide/.test(i) || (o || s.data("bs.tooltip", o = new e(this, n)), 
            "string" == typeof i && o[i]());
        });
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this;
    };
}(jQuery), function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, 
    e.prototype.getDefaults = function() {
        return e.DEFAULTS;
    }, e.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), 
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, e.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.popover"), n = "object" == typeof i && i;
            !o && /destroy|hide/.test(i) || (o || s.data("bs.popover", o = new e(this, n)), 
            "string" == typeof i && o[i]());
        });
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this;
    };
}(jQuery), function(t) {
    "use strict";
    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), 
        this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function i(i) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.scrollspy"), n = "object" == typeof i && i;
            o || s.data("bs.scrollspy", o = new e(this, n)), "string" == typeof i && o[i]();
        });
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, e.prototype.refresh = function() {
        var e = this, i = "offset", s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var e = t(this), o = e.data("target") || e.attr("href"), n = /^#./.test(o) && t(o);
            return n && n.length && n.is(":visible") && [ [ n[i]().top + s, o ] ] || null;
        }).sort(function(t, e) {
            return t[0] - e[0];
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1]);
        });
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), s = this.options.offset + i - this.$scrollElement.height(), o = this.offsets, n = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return r != (t = n[n.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--; ) r != n[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(n[t]);
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), 
        s.trigger("activate.bs.scrollspy");
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this;
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data());
        });
    });
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.tab");
            o || s.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]();
        });
    }
    var i = function(e) {
        this.element = t(e);
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"), n = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }), r = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
            if (o.trigger(n), e.trigger(r), !r.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var a = t(s);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    });
                });
            }
        }
    }, i.prototype.activate = function(e, s, o) {
        function n() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, 
            e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            o && o();
        }
        var r = s.find("> .active"), a = o && t.support.transition && (r.length && r.hasClass("fade") || !!s.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), 
        r.removeClass("in");
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this;
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show");
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.affix"), n = "object" == typeof e && e;
            o || s.data("bs.affix", o = new i(this, n)), "string" == typeof e && o[e]();
        });
    }
    var i = function(e, s) {
        this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, s) {
        var o = this.$target.scrollTop(), n = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= n.top) && "bottom" : !(o + r <= t - s) && "bottom";
        var a = null == this.affixed, l = a ? o : n.top, c = a ? r : e;
        return null != i && o <= i ? "top" : null != s && l + c >= t - s && "bottom";
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t;
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1);
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), s = this.options.offset, o = s.top, n = s.bottom, r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (n = o = s), "function" == typeof o && (o = s.top(this.$element)), 
            "function" == typeof n && (n = s.bottom(this.$element));
            var a = this.getState(r, e, o, n);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == a && this.$element.offset({
                top: r - e - n
            });
        }
    };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this;
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this), s = i.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), 
            null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s);
        });
    });
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, i, s, o) {
        return jQuery.easing[jQuery.easing.def](t, e, i, s, o);
    },
    easeInQuad: function(t, e, i, s, o) {
        return s * (e /= o) * e + i;
    },
    easeOutQuad: function(t, e, i, s, o) {
        return -s * (e /= o) * (e - 2) + i;
    },
    easeInOutQuad: function(t, e, i, s, o) {
        return (e /= o / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i;
    },
    easeInCubic: function(t, e, i, s, o) {
        return s * (e /= o) * e * e + i;
    },
    easeOutCubic: function(t, e, i, s, o) {
        return s * ((e = e / o - 1) * e * e + 1) + i;
    },
    easeInOutCubic: function(t, e, i, s, o) {
        return (e /= o / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i;
    },
    easeInQuart: function(t, e, i, s, o) {
        return s * (e /= o) * e * e * e + i;
    },
    easeOutQuart: function(t, e, i, s, o) {
        return -s * ((e = e / o - 1) * e * e * e - 1) + i;
    },
    easeInOutQuart: function(t, e, i, s, o) {
        return (e /= o / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i;
    },
    easeInQuint: function(t, e, i, s, o) {
        return s * (e /= o) * e * e * e * e + i;
    },
    easeOutQuint: function(t, e, i, s, o) {
        return s * ((e = e / o - 1) * e * e * e * e + 1) + i;
    },
    easeInOutQuint: function(t, e, i, s, o) {
        return (e /= o / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i;
    },
    easeInSine: function(t, e, i, s, o) {
        return -s * Math.cos(e / o * (Math.PI / 2)) + s + i;
    },
    easeOutSine: function(t, e, i, s, o) {
        return s * Math.sin(e / o * (Math.PI / 2)) + i;
    },
    easeInOutSine: function(t, e, i, s, o) {
        return -s / 2 * (Math.cos(Math.PI * e / o) - 1) + i;
    },
    easeInExpo: function(t, e, i, s, o) {
        return 0 == e ? i : s * Math.pow(2, 10 * (e / o - 1)) + i;
    },
    easeOutExpo: function(t, e, i, s, o) {
        return e == o ? i + s : s * (1 - Math.pow(2, -10 * e / o)) + i;
    },
    easeInOutExpo: function(t, e, i, s, o) {
        return 0 == e ? i : e == o ? i + s : (e /= o / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (2 - Math.pow(2, -10 * --e)) + i;
    },
    easeInCirc: function(t, e, i, s, o) {
        return -s * (Math.sqrt(1 - (e /= o) * e) - 1) + i;
    },
    easeOutCirc: function(t, e, i, s, o) {
        return s * Math.sqrt(1 - (e = e / o - 1) * e) + i;
    },
    easeInOutCirc: function(t, e, i, s, o) {
        return (e /= o / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
    },
    easeInElastic: function(t, e, i, s, o) {
        var n = 1.70158, r = 0, a = s;
        if (0 == e) return i;
        if (1 == (e /= o)) return i + s;
        if (r || (r = .3 * o), a < Math.abs(s)) {
            a = s;
            n = r / 4;
        } else n = r / (2 * Math.PI) * Math.asin(s / a);
        return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) + i;
    },
    easeOutElastic: function(t, e, i, s, o) {
        var n = 1.70158, r = 0, a = s;
        if (0 == e) return i;
        if (1 == (e /= o)) return i + s;
        if (r || (r = .3 * o), a < Math.abs(s)) {
            a = s;
            n = r / 4;
        } else n = r / (2 * Math.PI) * Math.asin(s / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * o - n) * (2 * Math.PI) / r) + s + i;
    },
    easeInOutElastic: function(t, e, i, s, o) {
        var n = 1.70158, r = 0, a = s;
        if (0 == e) return i;
        if (2 == (e /= o / 2)) return i + s;
        if (r || (r = o * (.3 * 1.5)), a < Math.abs(s)) {
            a = s;
            n = r / 4;
        } else n = r / (2 * Math.PI) * Math.asin(s / a);
        return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) * .5 + s + i;
    },
    easeInBack: function(t, e, i, s, o, n) {
        return void 0 == n && (n = 1.70158), s * (e /= o) * e * ((n + 1) * e - n) + i;
    },
    easeOutBack: function(t, e, i, s, o, n) {
        return void 0 == n && (n = 1.70158), s * ((e = e / o - 1) * e * ((n + 1) * e + n) + 1) + i;
    },
    easeInOutBack: function(t, e, i, s, o, n) {
        return void 0 == n && (n = 1.70158), (e /= o / 2) < 1 ? s / 2 * (e * e * ((1 + (n *= 1.525)) * e - n)) + i : s / 2 * ((e -= 2) * e * ((1 + (n *= 1.525)) * e + n) + 2) + i;
    },
    easeInBounce: function(t, e, i, s, o) {
        return s - jQuery.easing.easeOutBounce(t, o - e, 0, s, o) + i;
    },
    easeOutBounce: function(t, e, i, s, o) {
        return (e /= o) < 1 / 2.75 ? s * (7.5625 * e * e) + i : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i;
    },
    easeInOutBounce: function(t, e, i, s, o) {
        return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, s, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, s, o) + .5 * s + i;
    }
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e; ) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e;
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var i = 0, s = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, o, n;
            for (n = 0; null != (o = i[n]); n++) try {
                (s = t._data(o, "events")) && s.remove && t(o).triggerHandler("remove");
            } catch (t) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, s) {
        var o, n, r, a = {}, l = e.split(".")[0], c = l + "-" + (e = e.split(".")[1]);
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [ {} ].concat(s))), 
        t.expr[":"][c.toLowerCase()] = function(e) {
            return !!t.data(e, c);
        }, t[l] = t[l] || {}, o = t[l][e], n = t[l][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new n(t, e);
        }, t.extend(n, o, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), r = new i(), r.options = t.widget.extend({}, r.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? void (a[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }
                function o(t) {
                    return i.prototype[e].apply(this, t);
                }
                return function() {
                    var e, i = this._super, n = this._superApply;
                    return this._super = t, this._superApply = o, e = s.apply(this, arguments), this._super = i, 
                    this._superApply = n, e;
                };
            }()) : void (a[e] = s);
        }), n.prototype = t.widget.extend(r, {
            widgetEventPrefix: o ? r.widgetEventPrefix || e : e
        }, a, {
            constructor: n,
            namespace: l,
            widgetName: e,
            widgetFullName: c
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, n, i._proto);
        }), delete o._childConstructors) : i._childConstructors.push(n), t.widget.bridge(e, n), 
        n;
    }, t.widget.extend = function(e) {
        for (var i, o, n = s.call(arguments, 1), r = 0, a = n.length; a > r; r++) for (i in n[r]) o = n[r][i], 
        n[r].hasOwnProperty(i) && void 0 !== o && (e[i] = t.isPlainObject(o) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : o);
        return e;
    }, t.widget.bridge = function(e, i) {
        var o = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var r = "string" == typeof n, a = s.call(arguments, 1), l = this;
            return r ? this.length || "instance" !== n ? this.each(function() {
                var i, s = t.data(this, o);
                return "instance" === n ? (l = s, !1) : s ? t.isFunction(s[n]) && "_" !== n.charAt(0) ? (i = s[n].apply(s, a)) !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, 
                !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'");
            }) : l = void 0 : (a.length && (n = t.widget.extend.apply(null, [ n ].concat(a))), 
            this.each(function() {
                var e = t.data(this, o);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, o, new i(n, this));
            })), l;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy();
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var s, o, n, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (r = {}, s = e.split("."), e = s.shift(), s.length) {
                for (o = r[e] = t.widget.extend({}, this.options[e]), n = 0; s.length - 1 > n; n++) o[s[n]] = o[s[n]] || {}, 
                o = o[s[n]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                o[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i;
            }
            return this._setOptions(r), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
            this;
        },
        _setOptionClasses: function(e) {
            var i, s, o;
            for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (s = t(o.get()), 
            this._removeClass(o, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })));
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(e) {
            function i(i, n) {
                var r, a;
                for (a = 0; i.length > a; a++) r = o.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), 
                o.classesElementLookup[i[a]] = r, s.push(i[a]), n && e.classes[i[a]] && s.push(e.classes[i[a]]);
            }
            var s = [], o = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), 
            s.join(" ");
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, o) {
                -1 !== t.inArray(e.target, o) && (i.classesElementLookup[s] = t(o.not(e.target).get()));
            });
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var o = "string" == typeof t || null === t, n = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: s
            };
            return n.element.toggleClass(this._classes(n), s), this;
        },
        _on: function(e, i, s) {
            var o, n = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (s = i, 
            i = this.element, o = this.widget()), t.each(s, function(s, r) {
                function a() {
                    return e || !0 !== n.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0;
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + n.eventNamespace, h = l[2];
                h ? o.on(c, h, a) : i.on(c, a);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments);
            }, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, s) {
            var o, n, r = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], n = i.originalEvent) for (o in n) o in i || (i[o] = n[o]);
            return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.apply(this.element[0], [ i ].concat(s)) || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, o, n) {
            "string" == typeof o && (o = {
                effect: o
            });
            var r, a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
            "number" == typeof (o = o || {}) && (o = {
                duration: o
            }), r = !t.isEmptyObject(o), o.complete = n, o.delay && s.delay(o.delay), r && t.effects && t.effects.effect[a] ? s[e](o) : a !== e && s[a] ? s[a](o.duration, o.easing, n) : s.queue(function(i) {
                t(this)[e](), n && n.call(s[0]), i();
            });
        };
    }), t.widget, function() {
        function e(t, e, i) {
            return [ parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1) ];
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0;
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            };
        }
        var o, n = Math.max, r = Math.abs, a = /left|center|right/, l = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, d = /%$/, u = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== o) return o;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), n = s.children()[0];
                return t("body").append(s), e = n.offsetWidth, s.css("overflow", "scroll"), i = n.offsetWidth, 
                e === i && (i = s[0].clientWidth), s.remove(), o = e - i;
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: o ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var i = t(e || window), s = t.isWindow(i[0]), o = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: o,
                    offset: !s && !o ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                };
            }
        }, t.fn.position = function(o) {
            if (!o || !o.of) return u.apply(this, arguments);
            o = t.extend({}, o);
            var d, p, f, g, m, v, b = t(o.of), y = t.position.getWithinInfo(o.within), w = t.position.getScrollInfo(y), _ = (o.collision || "flip").split(" "), C = {};
            return v = s(b), b[0].preventDefault && (o.at = "left top"), p = v.width, f = v.height, 
            g = v.offset, m = t.extend({}, g), t.each([ "my", "at" ], function() {
                var t, e, i = (o[this] || "").split(" ");
                1 === i.length && (i = a.test(i[0]) ? i.concat([ "center" ]) : l.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ]), 
                i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), 
                e = c.exec(i[1]), C[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], o[this] = [ h.exec(i[0])[0], h.exec(i[1])[0] ];
            }), 1 === _.length && (_[1] = _[0]), "right" === o.at[0] ? m.left += p : "center" === o.at[0] && (m.left += p / 2), 
            "bottom" === o.at[1] ? m.top += f : "center" === o.at[1] && (m.top += f / 2), d = e(C.at, p, f), 
            m.left += d[0], m.top += d[1], this.each(function() {
                var s, a, l = t(this), c = l.outerWidth(), h = l.outerHeight(), u = i(this, "marginLeft"), v = i(this, "marginTop"), x = c + u + i(this, "marginRight") + w.width, T = h + v + i(this, "marginBottom") + w.height, k = t.extend({}, m), S = e(C.my, l.outerWidth(), l.outerHeight());
                "right" === o.my[0] ? k.left -= c : "center" === o.my[0] && (k.left -= c / 2), "bottom" === o.my[1] ? k.top -= h : "center" === o.my[1] && (k.top -= h / 2), 
                k.left += S[0], k.top += S[1], s = {
                    marginLeft: u,
                    marginTop: v
                }, t.each([ "left", "top" ], function(e, i) {
                    t.ui.position[_[e]] && t.ui.position[_[e]][i](k, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: c,
                        elemHeight: h,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: T,
                        offset: [ d[0] + S[0], d[1] + S[1] ],
                        my: o.my,
                        at: o.at,
                        within: y,
                        elem: l
                    });
                }), o.using && (a = function(t) {
                    var e = g.left - k.left, i = e + p - c, s = g.top - k.top, a = s + f - h, d = {
                        target: {
                            element: b,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: l,
                            left: k.left,
                            top: k.top,
                            width: c,
                            height: h
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    c > p && p > r(e + i) && (d.horizontal = "center"), h > f && f > r(s + a) && (d.vertical = "middle"), 
                    d.important = n(r(e), r(i)) > n(r(s), r(a)) ? "horizontal" : "vertical", o.using.call(this, t, d);
                }), l.offset(t.extend(k, {
                    using: a
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, o = s.isWindow ? s.scrollLeft : s.offset.left, r = s.width, a = t.left - e.collisionPosition.marginLeft, l = o - a, c = a + e.collisionWidth - r - o;
                    e.collisionWidth > r ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - r - o, 
                    t.left += l - i) : t.left = c > 0 && 0 >= l ? o : l > c ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = n(t.left - a, t.left);
                },
                top: function(t, e) {
                    var i, s = e.within, o = s.isWindow ? s.scrollTop : s.offset.top, r = e.within.height, a = t.top - e.collisionPosition.marginTop, l = o - a, c = a + e.collisionHeight - r - o;
                    e.collisionHeight > r ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - r - o, 
                    t.top += l - i) : t.top = c > 0 && 0 >= l ? o : l > c ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = n(t.top - a, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, o = e.within, n = o.offset.left + o.scrollLeft, a = o.width, l = o.isWindow ? o.scrollLeft : o.offset.left, c = t.left - e.collisionPosition.marginLeft, h = c - l, d = c + e.collisionWidth - a - l, u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > h ? (0 > (i = t.left + u + p + f + e.collisionWidth - a - n) || r(h) > i) && (t.left += u + p + f) : d > 0 && ((s = t.left - e.collisionPosition.marginLeft + u + p + f - l) > 0 || d > r(s)) && (t.left += u + p + f);
                },
                top: function(t, e) {
                    var i, s, o = e.within, n = o.offset.top + o.scrollTop, a = o.height, l = o.isWindow ? o.scrollTop : o.offset.top, c = t.top - e.collisionPosition.marginTop, h = c - l, d = c + e.collisionHeight - a - l, u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                    0 > h ? (0 > (s = t.top + u + p + f + e.collisionHeight - a - n) || r(h) > s) && (t.top += u + p + f) : d > 0 && ((i = t.top - e.collisionPosition.marginTop + u + p + f - l) > 0 || d > r(i)) && (t.top += u + p + f);
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, s) {
            return !!t.data(e, s[3]);
        }
    }), t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    }), t.ui.focusable = function(i, s) {
        var o, n, r, a, l, c = i.nodeName.toLowerCase();
        return "area" === c ? (o = i.parentNode, n = o.name, !(!i.href || !n || "map" !== o.nodeName.toLowerCase()) && ((r = t("img[usemap='#" + n + "']")).length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (a = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (a = !l.disabled) : a = "a" === c ? i.href || s : s, 
        a && t(i).is(":visible") && e(t(i)));
    }, t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        }
    }), t.ui.focusable, t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), 
                this.form.data("ui-form-reset-instances", t);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each([ "Width", "Height" ], function(e, i) {
        function s(e, i, s, n) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                n && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var o = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], n = i.toLowerCase(), r = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
                t(this).css(n, s(this, e) + "px");
            });
        }, t.fn["outer" + i] = function(e, o) {
            return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
                t(this).css(n, s(this, e, !0, o) + "px");
            });
        };
    }), t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1");
        };
    }(), t.fn.labels = function() {
        var e, i, s, o, n;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (o = this.eq(0).parents("label"), 
        (s = this.attr("id")) && (e = this.eq(0).parents().last(), n = e.add(e.length ? e.siblings() : this.siblings()), 
        i = "label[for='" + t.ui.escapeSelector(s) + "']", o = o.add(n.find(i).addBack(i))), 
        this.pushStack(o));
    }, t.fn.scrollParent = function(e) {
        var i = this.css("position"), s = "absolute" === i, o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n = this.parents().filter(function() {
            var e = t(this);
            return (!s || "static" !== e.css("position")) && o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && n.length ? n : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s);
        }
    }), t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var o = !1;
    t(document).on("mouseup", function() {
        o = !1;
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!o) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which, n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), o = !0, !0));
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault();
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), 
                e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this), s = i.offset(), o = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: o.left,
                        top: o.top,
                        right: o.left + i.outerWidth(),
                        bottom: o.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(e) {
            var i = this, s = this.options;
            this.opos = [ e.pageX, e.pageY ], this.elementPos = t(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), 
            t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), 
                s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, 
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }));
            }), t(e.target).parents().addBack().each(function() {
                var s, o = t.data(this, "selectable-item");
                return o ? (s = !e.metaKey && !e.ctrlKey || !o.$element.hasClass("ui-selected"), 
                i._removeClass(o.$element, s ? "ui-unselecting" : "ui-selected")._addClass(o.$element, s ? "ui-selecting" : "ui-unselecting"), 
                o.unselecting = !s, o.selecting = s, o.selected = s, s ? i._trigger("selecting", e, {
                    selecting: o.element
                }) : i._trigger("unselecting", e, {
                    unselecting: o.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, o = this.options, n = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
                return n > a && (i = a, a = n, n = i), r > l && (i = l, l = r, r = i), this.helper.css({
                    left: n,
                    top: r,
                    width: a - n,
                    height: l - r
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"), c = !1, h = {};
                    i && i.element !== s.element[0] && (h.left = i.left + s.elementPos.left, h.right = i.right + s.elementPos.left, 
                    h.top = i.top + s.elementPos.top, h.bottom = i.bottom + s.elementPos.top, "touch" === o.tolerance ? c = !(h.left > a || n > h.right || h.top > l || r > h.bottom) : "fit" === o.tolerance && (c = h.left > n && a > h.right && h.top > r && l > h.bottom), 
                    c ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), 
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), 
                    i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), 
                    i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), 
                    i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, 
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, 
                i._trigger("unselected", e, {
                    unselected: s.element
                });
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), 
                s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                });
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, i) {
            var s = null, o = !1, n = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, n.widgetName + "-item") === n ? (s = t(this), !1) : void 0;
            }), t.data(e.target, n.widgetName + "-item") === n && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (o = !0);
            }), !o)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, i, s) {
            var o, n, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (n = this.document.find("body"), 
            this.storedCursor = n.css("cursor"), n.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(n)), 
            r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !s) for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            var i, s, o, n, r = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), 
            !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], o = s.item[0], (n = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], o))) {
                if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var s = this, o = this.placeholder.offset(), n = this.options.axis, r = {};
                    n && "x" !== n || (r.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    n && "y" !== n || (r.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, o = s + this.helperProportions.height, n = t.left, r = n + t.width, a = t.top, l = a + t.height, c = this.offset.click.top, h = this.offset.click.left, d = "x" === this.options.axis || s + c > a && l > s + c, u = "y" === this.options.axis || e + h > n && r > e + h, p = d && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > n && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > a && l > o - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), o = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && o) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), 
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i : s && ("down" === s && e || "up" === s && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            var i, s, o, n, r = [], a = [], l = this._connectWith();
            if (l && e) for (i = l.length - 1; i >= 0; i--) for (o = t(l[i], this.document[0]), 
            s = o.length - 1; s >= 0; s--) (n = t.data(o[s], this.widgetFullName)) && n !== this && !n.options.disabled && a.push([ t.isFunction(n.options.items) ? n.options.items.call(n.element) : t(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n ]);
            for (a.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                r.push(this);
            });
            return t(r);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, s, o, n, r, a, l, c, h = this.items, d = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], u = this._connectWith();
            if (u && this.ready) for (i = u.length - 1; i >= 0; i--) for (o = t(u[i], this.document[0]), 
            s = o.length - 1; s >= 0; s--) (n = t.data(o[s], this.widgetFullName)) && n !== this && !n.options.disabled && (d.push([ t.isFunction(n.options.items) ? n.options.items.call(n.element[0], e, {
                item: this.currentItem
            }) : t(n.options.items, n.element), n ]), this.containers.push(n));
            for (i = d.length - 1; i >= 0; i--) for (r = d[i][1], a = d[i][0], s = 0, c = a.length; c > s; s++) (l = t(a[s])).data(this.widgetName + "-item", r), 
            h.push({
                item: l,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, o, n;
            for (i = this.items.length - 1; i >= 0; i--) (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, 
            e || (s.width = o.outerWidth(), s.height = o.outerHeight()), n = o.offset(), s.left = n.left, 
            s.top = n.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + s + ">", e.document[0]);
                    return e._addClass(o, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(o, "ui-sortable-helper"), 
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(o)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, o) : "img" === s && o.attr("src", e.currentItem.attr("src")), 
                    i || o.css("visibility", "hidden"), o;
                },
                update: function(t, o) {
                    (!i || s.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            s.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function(e) {
            var i, s, o, n, r, a, l, c, h, d, u = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (u && t.contains(this.containers[i].element[0], u.element[0])) continue;
                u = this.containers[i], p = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (u) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), 
            this.containers[p].containerCache.over = 1); else {
                for (o = 1e4, n = null, r = (h = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                a = h ? "width" : "height", d = h ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[r], 
                c = !1, e[d] - l > this.items[s][a] / 2 && (c = !0), o > Math.abs(e[d] - l) && (o = Math.abs(e[d] - l), 
                n = this.items[s], this.direction = c ? "up" : "down"));
                if (!n && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                n ? this._rearrange(e, n, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), 
                this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), 
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), 
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), 
            s;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), 
            s = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, n = /(html|body)/i.test(o[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : o.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : o.scrollLeft()) * s
            };
        },
        _generatePosition: function(e) {
            var i, s, o = this.options, n = e.pageX, r = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), 
            o.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / o.grid[1]) * o.grid[1], 
            r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, 
            s = this.originalPageX + Math.round((n - this.originalPageX) / o.grid[0]) * o.grid[0], 
            n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - o.grid[0] : s + o.grid[0] : s)), 
            {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function() {
                o === this.counter && this.refreshPositions(!s);
            });
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var s, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (o.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), o.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), o.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || o.push(i("deactivate", this, this.containers[s])), 
            this.containers[s].containerCache.over && (o.push(i("out", this, this.containers[s])), 
            this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !e) {
                for (s = 0; o.length > s; s++) o[s].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), 
            this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            };
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), 
            e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), 
            void ("icons" === t && (this._destroyIcons(), e && this._createIcons())));
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, o = this.headers.index(e.target), n = !1;
                switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                    n = this.headers[(o + 1) % s];
                    break;

                  case i.LEFT:
                  case i.UP:
                    n = this.headers[(o - 1 + s) % s];
                    break;

                  case i.SPACE:
                  case i.ENTER:
                    this._eventHandler(e);
                    break;

                  case i.HOME:
                    n = this.headers[0];
                    break;

                  case i.END:
                    n = this.headers[s - 1];
                }
                n && (t(e.target).attr("tabIndex", -1), t(n).attr("tabIndex", 0), t(n).trigger("focus"), 
                e.preventDefault());
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, 
            this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, 
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function() {
            var e, i = this.options, s = i.heightStyle, o = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), o = s.uniqueId().attr("id");
                e.attr("aria-controls", o), s.attr("aria-labelledby", i);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), 
            "fill" === s ? (e = o.height(), this.element.siblings(":visible").each(function() {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
            }).height(e));
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(e) {
            var i, s, o = this.options, n = this.active, r = t(e.currentTarget), a = r[0] === n[0], l = a && o.collapsible, c = l ? t() : r.next(), h = {
                oldHeader: n,
                oldPanel: n.next(),
                newHeader: l ? t() : r,
                newPanel: c
            };
            e.preventDefault(), a && !o.collapsible || !1 === this._trigger("beforeActivate", e, h) || (o.active = !l && this.headers.index(r), 
            this.active = a ? t() : r, this._toggle(h), this._removeClass(n, "ui-accordion-header-active", "ui-state-active"), 
            o.icons && (i = n.children(".ui-accordion-header-icon"), this._removeClass(i, null, o.icons.activeHeader)._addClass(i, null, o.icons.header)), 
            a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), 
            o.icons && (s = r.children(".ui-accordion-header-icon"), this._removeClass(s, null, o.icons.header)._addClass(s, null, o.icons.activeHeader)), 
            this._addClass(r.next(), "ui-accordion-content-active")));
        },
        _toggle: function(e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, 
            this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), 
            s.attr({
                "aria-hidden": "true"
            }), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(t, e, i) {
            var s, o, n, r = this, a = 0, l = t.css("box-sizing"), c = t.length && (!e.length || t.index() < e.index()), h = this.options.animate || {}, d = c && h.down || h, u = function() {
                r._toggleComplete(i);
            };
            return "number" == typeof d && (n = d), "string" == typeof d && (o = d), o = o || d.easing || h.easing, 
            n = n || d.duration || h.duration, e.length ? t.length ? (s = t.show().outerHeight(), 
            e.animate(this.hideProps, {
                duration: n,
                easing: o,
                step: function(t, e) {
                    e.now = Math.round(t);
                }
            }), void t.hide().animate(this.showProps, {
                duration: n,
                easing: o,
                complete: u,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - a), 
                    a = 0);
                }
            })) : e.animate(this.hideProps, n, o, u) : t.animate(this.showProps, n, o, u);
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), 
            e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement;
        } catch (i) {
            e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault();
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(e, s));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i);
                },
                blur: function(e) {
                    this._delay(function() {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            e.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function(e) {
            var i, s, o, n, r = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;

              case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;

              case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;

              case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;

              case t.ui.keyCode.UP:
                this.previous(e);
                break;

              case t.ui.keyCode.DOWN:
                this.next(e);
                break;

              case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;

              case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;

              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                this._activate(e);
                break;

              case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;

              default:
                r = !1, s = this.previousFilter || "", n = !1, o = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), 
                clearTimeout(this.filterTimer), o === s ? n = !0 : o = s + o, i = this._filterMenuItems(o), 
                (i = n && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (o = String.fromCharCode(e.keyCode), 
                i = this._filterMenuItems(o)), i.length ? (this.focus(e, i), this.previousFilter = o, 
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            r && e.preventDefault();
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function() {
            var e, i, s, o, n = this, r = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            i = a.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                n._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), 
                e.attr("aria-labelledby", i.attr("id"));
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                n._isDivider(e) && n._addClass(e, "ui-menu-divider", "ui-widget-content");
            }), o = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
            }
            this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function(t, e) {
            var i, s, o;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
            s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), o = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(o, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), 
            this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            });
        },
        _scrollIntoView: function(e) {
            var i, s, o, n, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, o = e.offset().top - this.activeMenu.offset().top - i - s, 
            n = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 
            0 > o ? this.activeMenu.scrollTop(n + o) : o + a > r && this.activeMenu.scrollTop(n + o - r + a));
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", t, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = s;
            }, this.delay);
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },
        next: function(t) {
            this._move("next", "first", t);
        },
        previous: function(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), 
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), 
            this.focus(i, s);
        },
        nextPage: function(e) {
            var i, s, o;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return 0 > (i = t(this)).offset().top - s - o;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e);
        },
        previousPage: function(e) {
            var i, s, o;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - s + o > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    }), t.widget("ui.selectmenu", [ t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = t();
        },
        _drawButton: function() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault();
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), 
            this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", t)));
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", t));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function(e, i) {
            var s = this, o = "";
            t.each(i, function(i, n) {
                var r;
                n.optgroup !== o && (r = t("<li>", {
                    text: n.optgroup
                }), s._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (n.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                r.appendTo(e), o = n.optgroup), s._renderItemData(e, n);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function(e, i) {
            var s = t("<li>"), o = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(o, i.label), 
            s.append(o).appendTo(e);
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;");
        },
        _move: function(t, e) {
            var i, s, o = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            o += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](o).eq(-1) : i[t + "All"](o).eq(0)).length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), 
            t.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
            },
            click: function(t) {
                this._setSelection(), this._toggle(t);
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                  case t.ui.keyCode.TAB:
                  case t.ui.keyCode.ESCAPE:
                    this.close(e), i = !1;
                    break;

                  case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;

                  case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;

                  case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;

                  case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;

                  case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;

                  case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;

                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;

                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;

                  default:
                    this.menu.trigger(e), i = !1;
                }
                i && e.preventDefault();
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), 
            this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e);
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), 
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), 
            this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), 
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), 
            this.element.hide()), void this.button.outerWidth(t));
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t;
        },
        _parseOptions: function(e) {
            var i = this, s = [];
            e.each(function(e, o) {
                s.push(i._parseOption(t(o), e));
            }), this.items = s;
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i);
                } catch (t) {}
                try {
                    s = decodeURIComponent(s);
                } catch (t) {}
                return e.hash.length > 1 && i === s;
            };
        }(),
        _create: function() {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), 
            this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t);
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), 
            this._refresh(), this.active.length && this.load(i.active);
        },
        _initialActive: function() {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, o) {
                return t(o).attr("aria-controls") === s ? (e = i, !1) : void 0;
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), 
            !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), 
            e;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            };
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), o = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                    s++;
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                    o = !1, s--;
                    break;

                  case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;

                  case t.ui.keyCode.HOME:
                    s = 0;
                    break;

                  case t.ui.keyCode.SPACE:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);

                  case t.ui.keyCode.ENTER:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);

                  default:
                    return;
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, o), 
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", s);
                }, this.delay));
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(e, i) {
            for (var s = this.tabs.length - 1; -1 !== t.inArray((e > s && (e = 0), 0 > e && (e = s), 
            e), this.options.disabled); ) e = i ? e + 1 : e - 1;
            return e;
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), 
            e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), 
            void ("heightStyle" === t && this._setupHeightStyle(e)));
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t);
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, 
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, 
            this.active = t()), this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var e = this, i = this.tabs, s = this.anchors, o = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var o, n, r, a = t(s).uniqueId().attr("id"), l = t(s).closest("li"), c = l.attr("aria-controls");
                e._isLocal(s) ? (o = s.hash, r = o.substring(1), n = e.element.find(e._sanitizeSelector(o))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, 
                o = "#" + r, (n = e.element.find(o)).length || (n = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), 
                n.attr("aria-live", "polite")), n.length && (e.panels = e.panels.add(n)), c && l.data("ui-tabs-aria-controls", c), 
                l.attr({
                    "aria-controls": r,
                    "aria-labelledby": a
                }), n.attr("aria-labelledby", a);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(o.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(e) {
            var i, s, o;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), 
            o = 0; s = this.tabs[o]; o++) i = t(s), !0 === e || -1 !== t.inArray(o, e) ? (i.attr("aria-disabled", "true"), 
            this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), 
            this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e);
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault();
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function(e) {
            var i = this.options, s = this.active, o = t(e.currentTarget).closest("li"), n = o[0] === s[0], r = n && i.collapsible, a = r ? t() : this._getPanelForTab(o), l = s.length ? this._getPanelForTab(s) : t(), c = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : o,
                newPanel: a
            };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || n && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(o), 
            this.active = n ? t() : o, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            a.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
        },
        _toggle: function(e, i) {
            function s() {
                n.running = !1, n._trigger("activate", e, i);
            }
            function o() {
                n._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && n.options.show ? n._show(r, n.options.show, s) : (r.show(), 
                s());
            }
            var n = this, r = i.newPanel, a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                n._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o();
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            a.hide(), o()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), 
            e;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null;
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null;
            })), this._setOptionDisabled(i));
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([ e ], i).sort() : [ e ];
                }
                this._setOptionDisabled(i);
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this, o = this.tabs.eq(e), n = o.find(".ui-tabs-anchor"), r = this._getPanelForTab(o), a = {
                tab: o,
                panel: r
            }, l = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0), s._removeClass(o, "ui-tabs-loading"), r.removeAttr("aria-busy"), 
                t === s.xhr && delete s.xhr;
            };
            this._isLocal(n[0]) || (this.xhr = t.ajax(this._ajaxSettings(n, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(o, "ui-tabs-loading"), 
            r.attr("aria-busy", "true"), this.xhr.done(function(t, e, o) {
                setTimeout(function() {
                    r.html(t), s._trigger("load", i, a), l(o, e);
                }, 1);
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e);
                }, 1);
            })));
        },
        _ajaxSettings: function(e, i, s) {
            var o = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, n) {
                    return o._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: n
                    }, s));
                }
            };
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    }), t.ui.tabs;
    var n = "ui-effects-", r = "ui-effects-style", a = "ui-effects-animated", l = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var s = h[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
        }
        function s(i) {
            var s = l(), o = s._rgba = [];
            return i = i.toLowerCase(), p(a, function(t, n) {
                var r, a = n.re.exec(i), l = a && n.parse(a), h = n.space || "rgba";
                return l ? (r = s[h](l), s[c[h].cache] = r[c[h].cache], o = s._rgba = r._rgba, !1) : e;
            }), o.length ? ("0,0,0,0" === o.join() && t.extend(o, n.transparent), s) : n[i];
        }
        function o(t, e, i) {
            return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        var n, r = /^([\-+])=\s*(\d+\.?\d*)/, a = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], l = t.Color = function(e, i, s, o) {
            return new t.Color.fn.parse(e, i, s, o);
        }, c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, h = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, u = t("<p>")[0], p = t.each;
        u.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = u.style.backgroundColor.indexOf("rgba") > -1, 
        p(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), l.fn = t.extend(l.prototype, {
            parse: function(o, r, a, h) {
                if (o === e) return this._rgba = [ null, null, null, null ], this;
                (o.jquery || o.nodeType) && (o = t(o).css(r), r = e);
                var d = this, u = t.type(o), f = this._rgba = [];
                return r !== e && (o = [ o, r, a, h ], u = "array"), "string" === u ? this.parse(s(o) || n._default) : "array" === u ? (p(c.rgba.props, function(t, e) {
                    f[e.idx] = i(o[e.idx], e);
                }), this) : "object" === u ? (o instanceof l ? p(c, function(t, e) {
                    o[e.cache] && (d[e.cache] = o[e.cache].slice());
                }) : p(c, function(e, s) {
                    var n = s.cache;
                    p(s.props, function(t, e) {
                        if (!d[n] && s.to) {
                            if ("alpha" === t || null == o[t]) return;
                            d[n] = s.to(d._rgba);
                        }
                        d[n][e.idx] = i(o[t], e, !0);
                    }), d[n] && 0 > t.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, s.from && (d._rgba = s.from(d[n])));
                }), this) : e;
            },
            is: function(t) {
                var i = l(t), s = !0, o = this;
                return p(c, function(t, n) {
                    var r, a = i[n.cache];
                    return a && (r = o[n.cache] || n.to && n.to(o._rgba) || [], p(n.props, function(t, i) {
                        return null != a[i.idx] ? s = a[i.idx] === r[i.idx] : e;
                    })), s;
                }), s;
            },
            _space: function() {
                var t = [], e = this;
                return p(c, function(i, s) {
                    e[s.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var s = l(t), o = s._space(), n = c[o], r = 0 === this.alpha() ? l("transparent") : this, a = r[n.cache] || n.to(r._rgba), d = a.slice();
                return s = s[n.cache], p(n.props, function(t, o) {
                    var n = o.idx, r = a[n], l = s[n], c = h[o.type] || {};
                    null !== l && (null === r ? d[n] = l : (c.mod && (l - r > c.mod / 2 ? r += c.mod : r - l > c.mod / 2 && (r -= c.mod)), 
                    d[n] = i((l - r) * e + r, o)));
                }), this[o](d);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), o = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * o[e] + s * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), 
                    t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            },
            toHexString: function(e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, s = t[0] / 255, o = t[1] / 255, n = t[2] / 255, r = t[3], a = Math.max(s, o, n), l = Math.min(s, o, n), c = a - l, h = a + l, d = .5 * h;
            return e = l === a ? 0 : s === a ? 60 * (o - n) / c + 360 : o === a ? 60 * (n - s) / c + 120 : 60 * (s - o) / c + 240, 
            i = 0 === c ? 0 : .5 >= d ? c / h : c / (2 - h), [ Math.round(e) % 360, i, d, null == r ? 1 : r ];
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], s = t[2], n = t[3], r = .5 >= s ? s * (1 + i) : s + i - s * i, a = 2 * s - r;
            return [ Math.round(255 * o(a, r, e + 1 / 3)), Math.round(255 * o(a, r, e)), Math.round(255 * o(a, r, e - 1 / 3)), n ];
        }, p(c, function(s, o) {
            var n = o.props, a = o.cache, c = o.to, h = o.from;
            l.fn[s] = function(s) {
                if (c && !this[a] && (this[a] = c(this._rgba)), s === e) return this[a].slice();
                var o, r = t.type(s), d = "array" === r || "object" === r ? s : arguments, u = this[a].slice();
                return p(n, function(t, e) {
                    var s = d["object" === r ? t : e.idx];
                    null == s && (s = u[e.idx]), u[e.idx] = i(s, e);
                }), h ? (o = l(h(u)), o[a] = u, o) : l(u);
            }, p(n, function(e, i) {
                l.fn[e] || (l.fn[e] = function(o) {
                    var n, a = t.type(o), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, c = this[l](), h = c[i.idx];
                    return "undefined" === a ? h : ("function" === a && (o = o.call(this, h), a = t.type(o)), 
                    null == o && i.empty ? this : ("string" === a && (n = r.exec(o)) && (o = h + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1)), 
                    c[i.idx] = o, this[l](c)));
                });
            });
        }), l.hook = function(e) {
            var i = e.split(" ");
            p(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, o) {
                        var n, r, a = "";
                        if ("transparent" !== o && ("string" !== t.type(o) || (n = s(o)))) {
                            if (o = l(n || o), !d.rgba && 1 !== o._rgba[3]) {
                                for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style; ) try {
                                    a = t.css(r, "backgroundColor"), r = r.parentNode;
                                } catch (t) {}
                                o = o.blend(a && "transparent" !== a ? a : "_default");
                            }
                            o = o.toRgbaString();
                        }
                        try {
                            e.style[i] = o;
                        } catch (t) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return p([ "Top", "Right", "Bottom", "Left" ], function(i, s) {
                    e["border" + s + "Color"] = t;
                }), e;
            }
        }, n = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(l), function() {
        function e(e) {
            var i, s, o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, n = {};
            if (o && o.length && o[0] && o[o[0]]) for (s = o.length; s--; ) i = o[s], "string" == typeof o[i] && (n[t.camelCase(i)] = o[i]); else for (i in o) "string" == typeof o[i] && (n[i] = o[i]);
            return n;
        }
        function i(e, i) {
            var s, n, r = {};
            for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (r[s] = n));
            return r;
        }
        var s = [ "add", "remove", "toggle" ], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (l.style(t.elem, i, t.end), 
                t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(o, n, r, a) {
            var l = t.speed(n, r, a);
            return this.queue(function() {
                var n, r = t(this), a = r.attr("class") || "", c = l.children ? r.find("*").addBack() : r;
                c = c.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    };
                }), (n = function() {
                    t.each(s, function(t, e) {
                        o[e] && r[e + "Class"](o[e]);
                    });
                })(), c = c.map(function() {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
                }), r.attr("class", a), c = c.map(function() {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise();
                }), t.when.apply(t, c.get()).done(function() {
                    n(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), l.complete.call(r[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, s, o, n) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, o, n) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, o, n) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, o, n) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, o, n, r) {
                    return "boolean" == typeof s || void 0 === s ? o ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, o, n, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, o, n);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, o, n) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, o, n);
            }
        });
    }(), function() {
        function e(e, i, s, o) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (o = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (o = s, 
            s = i, i = {}), t.isFunction(s) && (o = s, s = null), i && t.extend(e, i), s = s || i.duration, 
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, 
            e.complete = o || i.complete, e;
        }
        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect));
        }
        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(), o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || [ "", 0, i, s, 0 ];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            };
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(a) || e(i);
            };
        }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]]);
            },
            restore: function(t, e) {
                for (var i, s = 0, o = e.length; o > s; s++) null !== e[s] && (i = t.data(n + e[s]), 
                t.css(e[s], i));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), o = {
                    width: e.width(),
                    height: e.height()
                }, n = document.activeElement;
                try {
                    n.id;
                } catch (t) {
                    n = document.body;
                }
                return e.wrap(s), (e[0] === n || t.contains(e[0], n)) && t(n).trigger("focus"), 
                s = e.parent(), "static" === e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(o), s.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), 
                e;
            }
        }), t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, 
                s;
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, o = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * o,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * o,
                    outerWidth: t.outerWidth() * s
                };
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [ 1, 0 ].concat(s.splice(e, i))), t.dequeue();
            },
            saveStyle: function(t) {
                t.data(r, t[0].style.cssText);
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(r) || "", t.removeData(r);
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), 
                e;
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    s = 0;
                    break;

                  case "center":
                    s = .5;
                    break;

                  case "right":
                    s = 1;
                    break;

                  default:
                    s = t[1] / e.width;
                }
                return {
                    x: s,
                    y: i
                };
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"), o = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", 
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), 
                e.data(n + "placeholder", i)), e.css({
                    position: s,
                    left: o.left,
                    top: o.top
                }), i;
            },
            removePlaceholder: function(t) {
                var e = n + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function(e, i, s, o) {
                return o = o || {}, t.each(i, function(t, i) {
                    var n = e.cssUnit(i);
                    n[0] > 0 && (o[i] = n[0] * s + n[1]);
                }), o;
            }
        }), t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        t.isFunction(c) && c.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this);
                    s.mode = d.shift(), !1 === t.uiBackCompat || n ? "none" === s.mode ? (r[h](), i()) : o.call(r[0], s, function() {
                        r.removeData(a), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), i();
                    }) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), i()) : o.call(r[0], s, i);
                }
                var s = e.apply(this, arguments), o = t.effects.effect[s.effect], n = o.mode, r = s.queue, l = r || "fx", c = s.complete, h = s.mode, d = [], u = function(e) {
                    var i = t(this), s = t.effects.mode(i, h) || n;
                    i.data(a, !0), d.push(s), n && ("show" === s || s === n && "hide" === s) && i.show(), 
                    n && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
                };
                return t.fx.off || !o ? h ? this[h](s.duration, c) : this.each(function() {
                    c && c.call(this);
                }) : !1 === r ? this.each(u).each(i) : this.queue(l, u).queue(l, i);
            },
            show: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var o = e.apply(this, arguments);
                    return o.mode = "show", this.effect.call(this, o);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var o = e.apply(this, arguments);
                    return o.mode = "hide", this.effect.call(this, o);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var o = e.apply(this, arguments);
                    return o.mode = "toggle", this.effect.call(this, o);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e), s = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    i.indexOf(e) > 0 && (s = [ parseFloat(i), e ]);
                }), s;
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
            },
            transfer: function(e, i) {
                var s = t(this), o = t(e.to), n = "fixed" === o.css("position"), r = t("body"), a = n ? r.scrollTop() : 0, l = n ? r.scrollLeft() : 0, c = o.offset(), h = {
                    top: c.top - a,
                    left: c.left - l,
                    height: o.innerHeight(),
                    width: o.innerWidth()
                }, d = s.offset(), u = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: d.top - a,
                    left: d.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: n ? "fixed" : "absolute"
                }).animate(h, e.duration, e.easing, function() {
                    u.remove(), t.isFunction(i) && i();
                });
            }
        }), t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), 
            e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            });
        };
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, o = t(this), n = e.direction || "up", r = o.cssClip(), a = {
            clip: t.extend({}, r)
        }, l = t.effects.createPlaceholder(o);
        a.clip[s[n][0]] = a.clip[s[n][1]], "show" === e.mode && (o.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), 
        a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), o.animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("bounce", function(e, i) {
        var s, o, n, r = t(this), a = e.mode, l = "hide" === a, c = "show" === a, h = e.direction || "up", d = e.distance, u = e.times || 5, p = 2 * u + (c || l ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === h || "down" === h ? "top" : "left", v = "up" === h || "left" === h, b = 0, y = r.queue().length;
        for (t.effects.createPlaceholder(r), n = r.css(m), d || (d = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), 
        c && (o = {
            opacity: 1
        }, o[m] = n, r.css("opacity", 0).css(m, v ? 2 * -d : 2 * d).animate(o, f, g)), l && (d /= Math.pow(2, u - 1)), 
        (o = {})[m] = n; u > b; b++) s = {}, s[m] = (v ? "-=" : "+=") + d, r.animate(s, f, g).animate(o, f, g), 
        d = l ? 2 * d : d / 2;
        l && (s = {
            opacity: 0
        }, s[m] = (v ? "-=" : "+=") + d, r.animate(s, f, g)), r.queue(i), t.effects.unshift(r, y, p + 1);
    }), t.effects.define("clip", "hide", function(e, i) {
        var s, o = {}, n = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r, c = a || "vertical" === r;
        s = n.cssClip(), o.clip = {
            top: c ? (s.bottom - s.top) / 2 : s.top,
            right: l ? (s.right - s.left) / 2 : s.right,
            bottom: c ? (s.bottom - s.top) / 2 : s.bottom,
            left: l ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(n), "show" === e.mode && (n.cssClip(o.clip), o.clip = s), 
        n.animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("drop", "hide", function(e, i) {
        var s, o = t(this), n = "show" === e.mode, r = e.direction || "left", a = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", h = {
            opacity: 0
        };
        t.effects.createPlaceholder(o), s = e.distance || o["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, 
        h[a] = l + s, n && (o.css(h), h[a] = c + s, h.opacity = 1), o.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("explode", "hide", function(e, i) {
        function s() {
            u.css({
                visibility: "visible"
            }), t(v).remove(), i();
        }
        var o, n, r, a, l, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = h, u = t(this), p = "show" === e.mode, f = u.show().css("visibility", "hidden").offset(), g = Math.ceil(u.outerWidth() / d), m = Math.ceil(u.outerHeight() / h), v = [];
        for (o = 0; h > o; o++) for (a = f.top + o * m, c = o - (h - 1) / 2, n = 0; d > n; n++) r = f.left + n * g, 
        l = n - (d - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -n * g,
            top: -o * m
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g,
            height: m,
            left: r + (p ? l * g : 0),
            top: a + (p ? c * m : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: r + (p ? 0 : l * g),
            top: a + (p ? 0 : c * m),
            opacity: p ? 1 : 0
        }, e.duration || 500, e.easing, function() {
            v.push(this), v.length === h * d && s();
        });
    }), t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({
            opacity: s ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("fold", "hide", function(e, i) {
        var s = t(this), o = e.mode, n = "show" === o, r = "hide" === o, a = e.size || 15, l = /([0-9]+)%/.exec(a), c = !!e.horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], h = e.duration / 2, d = t.effects.createPlaceholder(s), u = s.cssClip(), p = {
            clip: t.extend({}, u)
        }, f = {
            clip: t.extend({}, u)
        }, g = [ u[c[0]], u[c[1]] ], m = s.queue().length;
        l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]), p.clip[c[0]] = a, f.clip[c[0]] = a, 
        f.clip[c[1]] = 0, n && (s.cssClip(f.clip), d && d.css(t.effects.clipToBox(f)), f.clip = u), 
        s.queue(function(i) {
            d && d.animate(t.effects.clipToBox(p), h, e.easing).animate(t.effects.clipToBox(f), h, e.easing), 
            i();
        }).animate(p, h, e.easing).animate(f, h, e.easing).queue(i), t.effects.unshift(s, m, 4);
    }), t.effects.define("highlight", "show", function(e, i) {
        var s = t(this), o = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === e.mode && (o.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("size", function(e, i) {
        var s, o, n, r = t(this), a = [ "fontSize" ], l = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], c = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], h = e.mode, d = "effect" !== h, u = e.scale || "both", p = e.origin || [ "middle", "center" ], f = r.css("position"), g = r.position(), m = t.effects.scaledDimensions(r), v = e.from || m, b = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r), "show" === h && (n = v, v = b, b = n), o = {
            from: {
                y: v.height / m.height,
                x: v.width / m.width
            },
            to: {
                y: b.height / m.height,
                x: b.width / m.width
            }
        }, ("box" === u || "both" === u) && (o.from.y !== o.to.y && (v = t.effects.setTransition(r, l, o.from.y, v), 
        b = t.effects.setTransition(r, l, o.to.y, b)), o.from.x !== o.to.x && (v = t.effects.setTransition(r, c, o.from.x, v), 
        b = t.effects.setTransition(r, c, o.to.x, b))), ("content" === u || "both" === u) && o.from.y !== o.to.y && (v = t.effects.setTransition(r, a, o.from.y, v), 
        b = t.effects.setTransition(r, a, o.to.y, b)), p && (s = t.effects.getBaseline(p, m), 
        v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left, 
        b.top = (m.outerHeight - b.outerHeight) * s.y + g.top, b.left = (m.outerWidth - b.outerWidth) * s.x + g.left), 
        r.css(v), ("content" === u || "both" === u) && (l = l.concat([ "marginTop", "marginBottom" ]).concat(a), 
        c = c.concat([ "marginLeft", "marginRight" ]), r.find("*[width]").each(function() {
            var i = t(this), s = t.effects.scaledDimensions(i), n = {
                height: s.height * o.from.y,
                width: s.width * o.from.x,
                outerHeight: s.outerHeight * o.from.y,
                outerWidth: s.outerWidth * o.from.x
            }, r = {
                height: s.height * o.to.y,
                width: s.width * o.to.x,
                outerHeight: s.height * o.to.y,
                outerWidth: s.width * o.to.x
            };
            o.from.y !== o.to.y && (n = t.effects.setTransition(i, l, o.from.y, n), r = t.effects.setTransition(i, l, o.to.y, r)), 
            o.from.x !== o.to.x && (n = t.effects.setTransition(i, c, o.from.x, n), r = t.effects.setTransition(i, c, o.to.x, r)), 
            d && t.effects.saveStyle(i), i.css(n), i.animate(r, e.duration, e.easing, function() {
                d && t.effects.restoreStyle(i);
            });
        })), r.animate(b, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = r.offset();
                0 === b.opacity && r.css("opacity", v.opacity), d || (r.css("position", "static" === f ? "relative" : f).offset(e), 
                t.effects.saveStyle(r)), i();
            }
        });
    }), t.effects.define("scale", function(e, i) {
        var s = t(this), o = e.mode, n = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== o ? 0 : 100), r = t.extend(!0, {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, n, e.direction || "both"),
            origin: e.origin || [ "middle", "center" ]
        }, e);
        e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i);
    }), t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, s, i);
    }), t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this), o = e.mode, n = "show" === o, r = "hide" === o, a = n || r, l = 2 * (e.times || 5) + (a ? 1 : 0), c = e.duration / l, h = 0, d = 1, u = s.queue().length;
        for ((n || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1); l > d; d++) s.animate({
            opacity: h
        }, c, e.easing), h = 1 - h;
        s.animate({
            opacity: h
        }, c, e.easing), s.queue(i), t.effects.unshift(s, u, l + 1);
    }), t.effects.define("shake", function(e, i) {
        var s = 1, o = t(this), n = e.direction || "left", r = e.distance || 20, a = e.times || 3, l = 2 * a + 1, c = Math.round(e.duration / l), h = "up" === n || "down" === n ? "top" : "left", d = "up" === n || "left" === n, u = {}, p = {}, f = {}, g = o.queue().length;
        for (t.effects.createPlaceholder(o), u[h] = (d ? "-=" : "+=") + r, p[h] = (d ? "+=" : "-=") + 2 * r, 
        f[h] = (d ? "-=" : "+=") + 2 * r, o.animate(u, c, e.easing); a > s; s++) o.animate(p, c, e.easing).animate(f, c, e.easing);
        o.animate(p, c, e.easing).animate(u, c / 2, e.easing).queue(i), t.effects.unshift(o, g, l + 1);
    }), t.effects.define("slide", "show", function(e, i) {
        var s, o, n = t(this), r = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, a = e.mode, l = e.direction || "left", c = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l, d = e.distance || n["top" === c ? "outerHeight" : "outerWidth"](!0), u = {};
        t.effects.createPlaceholder(n), s = n.cssClip(), o = n.position()[c], u[c] = (h ? -1 : 1) * d + o, 
        u.clip = n.cssClip(), u.clip[r[l][1]] = u.clip[r[l][0]], "show" === a && (n.cssClip(u.clip), 
        n.css(c, u[c]), u.clip = s, u[c] = o), n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
        t(this).transfer(e, i);
    });
}), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, s) {
            var o, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
            n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, 
            n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, 
            n.rowCount = 1, n.shouldClick = !0, n.$slider = t(i), n.$slidesCache = null, n.transformType = null, 
            n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, 
            n.windowTimer = null, o = t(i).data("slick") || {}, n.options = t.extend({}, n.defaults, s, o), 
            n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", 
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
            n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = t.proxy(n.autoPlay, n), 
            n.autoPlayClear = t.proxy(n.autoPlayClear, n), n.autoPlayIterator = t.proxy(n.autoPlayIterator, n), 
            n.changeSlide = t.proxy(n.changeSlide, n), n.clickHandler = t.proxy(n.clickHandler, n), 
            n.selectHandler = t.proxy(n.selectHandler, n), n.setPosition = t.proxy(n.setPosition, n), 
            n.swipeHandler = t.proxy(n.swipeHandler, n), n.dragHandler = t.proxy(n.dragHandler, n), 
            n.keyHandler = t.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            n.registerBreakpoints(), n.init(!0);
        };
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
        var o = this;
        if ("boolean" == typeof i) s = i, i = null; else if (0 > i || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : s ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === s ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e);
        }), o.$slidesCache = o.$slides, o.reinit();
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed);
        }
    }, e.prototype.animateSlide = function(e, i) {
        var s = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), 
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), 
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (s[o.animType] = "translate(" + t + "px, 0px)", 
                o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(s));
            },
            complete: function() {
                i && i.call();
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + e + "px, 0px)", 
        o.$slideTrack.css(s), i && setTimeout(function() {
            o.disableTransition(), i.call();
        }, o.options.speed));
    }, e.prototype.getNavTarget = function() {
        var e = this, i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i;
    }, e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
        });
    }, e.prototype.applyTransition = function(t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer);
    }, e.prototype.autoPlayIterator = function() {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, 
        t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e));
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), 
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), 
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), 
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, e.prototype.buildDots = function() {
        var e, i, s = this;
        if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
            for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), 
            e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), 
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), 
        e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), 
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }, e.prototype.buildRows = function() {
        var t, e, i, s, o, n, r, a = this;
        if (s = document.createDocumentFragment(), n = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(n.length / r), t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        n.get(h) && c.appendChild(n.get(h));
                    }
                    l.appendChild(c);
                }
                s.appendChild(l);
            }
            a.$slider.empty().append(s), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var s, o, n, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? n = c : "slider" === r.respondTo ? n = l : "min" === r.respondTo && (n = Math.min(c, l)), 
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (s in r.breakpoints) r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[s] && (o = r.breakpoints[s]) : n > r.breakpoints[s] && (o = r.breakpoints[s]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, 
            "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), 
            !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, 
            "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), 
            !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, 
            r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), 
            r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [ r, a ]);
        }
    }, e.prototype.changeSlide = function(e, i) {
        var s, o, n, r = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, 
        s = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
          case "previous":
            o = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
            break;

          case "next":
            o = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
            break;

          case "index":
            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
            break;

          default:
            return;
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i;
        if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var s in e) {
            if (t < e[s]) {
                t = i;
                break;
            }
            i = e[s];
        }
        return t;
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), 
        e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), 
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), 
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), 
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), 
        t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), 
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), 
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), 
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), 
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), 
        e.$slider.empty().append(t));
    }, e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), 
        i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"));
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), 
        i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), 
        i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), 
        i.unslicked = !0, e || i.$slider.trigger("destroy", [ i ]);
    }, e.prototype.disableTransition = function(t) {
        var e = this, i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call();
        }, i.options.speed));
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, e.prototype.getDotCount = function() {
        var t = this, e = 0, i = 0, s = 0;
        if (!0 === t.options.infinite) for (;e < t.slideCount; ) ++s, e = i + t.options.slidesToScroll, 
        i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) s = t.slideCount; else if (t.options.asNavFor) for (;e < t.slideCount; ) ++s, 
        e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1;
    }, e.prototype.getLeft = function(t) {
        var e, i, s, o = this, n = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, 
        n = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, 
        n = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, 
        n = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, 
        n = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, 
        n = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, 
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + n, 
        !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), 
        e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, 
        !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), 
        e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, 
        e += (o.$list.width() - s.outerWidth()) / 2)), e;
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t];
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, s = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, 
        s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i; ) o.push(i), i = s + e.options.slidesToScroll, 
        s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o;
    }, e.prototype.getSlick = function() {
        return this;
    }, e.prototype.getSlideCount = function() {
        var e, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, 
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(o, n) {
            return n.offsetLeft - i + t(n).outerWidth() / 2 > -1 * s.swipeLeft ? (e = n, !1) : void 0;
        }), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll;
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e);
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), 
        i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), 
        i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [ i ]), 
        !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, 
        i.autoPlay());
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            });
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        e.activateADA();
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide));
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), 
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), 
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), 
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), 
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition);
    }, e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), 
        t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this), i = t(this).attr("data-lazy"), s = document.createElement("img");
                s.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [ n, e, i ]);
                    });
                }, s.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    n.$slider.trigger("lazyLoadError", [ n, e, i ]);
                }, s.src = i;
            });
        }
        var i, s, o, n = this;
        !0 === n.options.centerMode ? !0 === n.options.infinite ? (s = n.currentSlide + (n.options.slidesToShow / 2 + 1), 
        o = s + n.options.slidesToShow + 2) : (s = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), 
        o = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (s = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, 
        o = Math.ceil(s + n.options.slidesToShow), !0 === n.options.fade && (s > 0 && s--, 
        o <= n.slideCount && o++)), e(n.$slider.find(".slick-slide").slice(s, o)), n.slideCount <= n.options.slidesToShow ? (i = n.$slider.find(".slick-slide"), 
        e(i)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (i = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow), 
        e(i)) : 0 === n.currentSlide && (i = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow), 
        e(i));
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition();
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0;
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1;
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [ e, t ]), e.animating = !1, e.setPosition(), 
        e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA());
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault();
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, s, o, n = this, r = t("img[data-lazy]", n.$slider);
        r.length ? (i = r.first(), s = i.attr("data-lazy"), o = document.createElement("img"), 
        o.onload = function() {
            i.attr("src", s).removeAttr("data-lazy").removeClass("slick-loading"), !0 === n.options.adaptiveHeight && n.setPosition(), 
            n.$slider.trigger("lazyLoaded", [ n, i, s ]), n.progressiveLazyLoad();
        }, o.onerror = function() {
            3 > e ? setTimeout(function() {
                n.progressiveLazyLoad(e + 1);
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            n.$slider.trigger("lazyLoadError", [ n, i, s ]), n.progressiveLazyLoad());
        }, o.src = s) : n.$slider.trigger("allImagesLoaded", [ n ]);
    }, e.prototype.refresh = function(e) {
        var i, s, o = this;
        s = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > s && (o.currentSlide = s), 
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, 
        o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1);
    }, e.prototype.registerBreakpoints = function() {
        var e, i, s, o = this, n = o.options.responsive || null;
        if ("array" === t.type(n) && n.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in n) if (s = o.breakpoints.length - 1, i = n[e].breakpoint, n.hasOwnProperty(e)) {
                for (;s >= 0; ) o.breakpoints[s] && o.breakpoints[s] === i && o.breakpoints.splice(s, 1), 
                s--;
                o.breakpoints.push(i), o.breakpointSettings[i] = n[e].settings;
            }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t;
            });
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, 
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), 
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), 
        e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), 
        e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), 
        e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), 
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), 
        e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [ e ]);
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var s = this;
        return "boolean" == typeof t ? (e = t, t = !0 === e ? 0 : s.slideCount - 1) : t = !0 === e ? --t : t, 
        !(s.slideCount < 1 || 0 > t || t > s.slideCount - 1) && (s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), 
        s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), 
        s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit());
    }, e.prototype.setCSS = function(t) {
        var e, i, s = this, o = {};
        !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", 
        i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", o[s.positionProp] = t, 
        !1 === s.transformsEnabled ? s.$slideTrack.css(o) : (o = {}, !1 === s.cssTransitions ? (o[s.animType] = "translate(" + e + ", " + i + ")", 
        s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", 
        s.$slideTrack.css(o)));
    }, e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), 
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), 
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), 
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(s, o) {
            e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            });
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        });
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e);
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, s, o, n, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], n = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], 
        o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), 
        "single" === n) r.options[s] = o; else if ("multiple" === n) t.each(s, function(t, e) {
            r.options[t] = e;
        }); else if ("responsive" === n) for (i in o) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [ o[i] ]; else {
            for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), 
            e--;
            r.options.responsive.push(o[i]);
        }
        a && (r.unload(), r.reinit());
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), 
        t.$slider.trigger("setPosition", [ t ]);
    }, e.prototype.setProps = function() {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), 
        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), 
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), 
        void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", 
        t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), 
        void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", 
        t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), 
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", 
        t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), 
        void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", 
        t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), 
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", 
        t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType;
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, s, o, n = this;
        i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode ? (e = Math.floor(n.options.slidesToShow / 2), 
        !0 === n.options.infinite && (t >= e && t <= n.slideCount - 1 - e ? n.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + t, 
        i.slice(s - e + 1, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === t ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), 
        n.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, 
        s = !0 === n.options.infinite ? n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? i.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === n.options.lazyLoad && n.lazyLoad();
    }, e.prototype.setupInfinite = function() {
        var e, i, s, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, 
        o.slideCount > o.options.slidesToShow)) {
            for (s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, 
            e = o.slideCount; e > o.slideCount - s; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; s > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "");
            });
        }
    }, e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t;
    }, e.prototype.selectHandler = function(e) {
        var i = this, s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"), o = parseInt(s.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), 
        void i.asNavFor(o)) : void i.slideHandler(o);
    }, e.prototype.slideHandler = function(t, e, i) {
        var s, o, n, r, a, l = null, c = this;
        return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), 
        s = t, l = c.getLeft(s), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, 
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (s = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(s);
        }) : c.postSlide(s))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (s = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(s);
        }) : c.postSlide(s))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > s ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s, 
        c.animating = !0, c.$slider.trigger("beforeChange", [ c, c.currentSlide, o ]), n = c.currentSlide, 
        c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), 
        (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), 
        c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(n), 
        c.fadeSlide(o, function() {
            c.postSlide(o);
        })) : c.postSlide(o), void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, function() {
            c.postSlide(o);
        }) : c.postSlide(o))));
    }, e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), 
        t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), 
        t.$slider.addClass("slick-loading");
    }, e.prototype.swipeDirection = function() {
        var t, e, i, s, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, 
        i = Math.atan2(e, t), 0 > (s = Math.round(180 * i / Math.PI)) && (s = 360 - Math.abs(s)), 
        45 >= s && s >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= s && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && 225 >= s ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && 135 >= s ? "down" : "up" : "vertical";
    }, e.prototype.swipeEnd = function(t) {
        var e, i, s = this;
        if (s.dragging = !1, s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), 
        void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [ s, s.swipeDirection() ]), 
        s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
              case "left":
              case "down":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), 
                s.currentDirection = 0;
                break;

              case "right":
              case "up":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), 
                s.currentDirection = 1;
            }
            "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [ s, i ]));
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), 
        s.touchObject = {});
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, 
        e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
        t.data.action) {
          case "start":
            e.swipeStart(t);
            break;

          case "move":
            e.swipeMove(t);
            break;

          case "end":
            e.swipeEnd(t);
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, s, o, n, r = this;
        return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (e = r.getLeft(r.currentSlide), 
        r.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY, 
        r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), 
        !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), 
        "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), 
        o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), 
        !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), 
        s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, 
        r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + s * o : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * o, 
        !0 === r.options.verticalSwiping && (r.swipeLeft = e + s * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, 
        !1) : void r.setCSS(r.swipeLeft))) : void 0);
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, 
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), 
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, 
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, 
        void (i.dragging = !0));
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), 
        t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), 
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [ e, t ]), e.destroy();
    }, e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1);
    }, t.fn.slick = function() {
        var t, i, s = this, o = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = s.length;
        for (t = 0; r > t; t++) if ("object" == typeof o || void 0 === o ? s[t].slick = new e(s[t], o) : i = s[t].slick[o].apply(s[t].slick, n), 
        void 0 !== i) return i;
        return s;
    };
}), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function(t) {
    var e = -1, i = -1, s = function(t) {
        return parseFloat(t) || 0;
    }, o = function(e) {
        var i = null, o = [];
        return t(e).each(function() {
            var e = t(this), n = e.offset().top - s(e.css("margin-top")), r = o.length > 0 ? o[o.length - 1] : null;
            null === r ? o.push(e) : Math.floor(Math.abs(i - n)) <= 1 ? o[o.length - 1] = r.add(e) : o.push(e), 
            i = n;
        }), o;
    }, n = function(e) {
        var i = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), 
        i);
    }, r = t.fn.matchHeight = function(e) {
        var i = n(e);
        if (i.remove) {
            var s = this;
            return this.css(i.property, ""), t.each(r._groups, function(t, e) {
                e.elements = e.elements.not(s);
            }), this;
        }
        return this.length <= 1 && !i.target ? this : (r._groups.push({
            elements: this,
            options: i
        }), r._apply(this, i), this);
    };
    r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, 
    r._beforeUpdate = null, r._afterUpdate = null, r._rows = o, r._parse = s, r._parseOptions = n, 
    r._apply = function(e, i) {
        var a = n(i), l = t(e), c = [ l ], h = t(window).scrollTop(), d = t("html").outerHeight(!0), u = l.parents().filter(":hidden");
        return u.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"));
        }), u.css("display", "block"), a.byRow && !a.target && (l.each(function() {
            var e = t(this), i = e.css("display");
            "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), 
            e.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            });
        }), c = o(l), l.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
        })), t.each(c, function(e, i) {
            var o = t(i), n = 0;
            if (a.target) n = a.target.outerHeight(!1); else {
                if (a.byRow && o.length <= 1) return void o.css(a.property, "");
                o.each(function() {
                    var e = t(this), i = e.attr("style"), s = e.css("display");
                    "inline-block" !== s && "flex" !== s && "inline-flex" !== s && (s = "block");
                    var o = {
                        display: s
                    };
                    o[a.property] = "", e.css(o), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), 
                    i ? e.attr("style", i) : e.css("display", "");
                });
            }
            o.each(function() {
                var e = t(this), i = 0;
                a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += s(e.css("border-top-width")) + s(e.css("border-bottom-width")), 
                i += s(e.css("padding-top")) + s(e.css("padding-bottom"))), e.css(a.property, n - i + "px"));
            });
        }), u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null);
        }), r._maintainScroll && t(window).scrollTop(h / d * t("html").outerHeight(!0)), 
        this;
    }, r._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var i = t(this), s = i.attr("data-mh") || i.attr("data-match-height");
            e[s] = s in e ? e[s].add(i) : i;
        }), t.each(e, function() {
            this.matchHeight(!0);
        });
    };
    var a = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
            r._apply(this.elements, this.options);
        }), r._afterUpdate && r._afterUpdate(e, r._groups);
    };
    r._update = function(s, o) {
        if (o && "resize" === o.type) {
            var n = t(window).width();
            if (n === e) return;
            e = n;
        }
        s ? -1 === i && (i = setTimeout(function() {
            a(o), i = -1;
        }, r._throttle)) : a(o);
    }, t(r._applyDataApi);
    var l = t.fn.on ? "on" : "bind";
    t(window)[l]("load", function(t) {
        r._update(!1, t);
    }), t(window)[l]("resize orientationchange", function(t) {
        r._update(!0, t);
    });
}), $(".top-slider").slick({
    infinite: !0,
    dots: !1,
    autoplay: !0,
    autoplaySpeed: 3500,
    pauseOnFocus: !1,
    pauseOnHover: !1,
    pauseOnDotsHover: !1,
    responsive: [ {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            infinite: !0,
            dots: !0,
            arrows: !1
        }
    } ]
}), $(".caring-slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    centerMode: !1,
    arrows: !1,
    dots: !0
}), $(".location-slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    centerMode: !1,
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 3500
}), $("input,textarea").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "");
}), $("input,textarea").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"));
}), $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
}), $(function() {
    $(".caring-box").matchHeight();
}), $(function() {
    $(".location-info-box").matchHeight();
}), $(function() {
    $("#news-wrapper .news-box").matchHeight();
}), $(function() {
    $("#news-wrapper .news-box h3").matchHeight();
}), $(function() {
    $(".patient-box .title").matchHeight();
}), $(function() {
    $("#phy-list .provider-box .doctor-title").matchHeight();
}), $(function() {
    $("#phy-list .provider-box").matchHeight();
}), $(function() {
    $("#news-wrapper .career-box h3").matchHeight();
}), $(function() {
    $("#brochure-wrapper .brochure-box h3").matchHeight();
}), $(function() {
    $(".location-box address").matchHeight();
}), $(function() {
    $(".location-box .location-title").matchHeight();
}), $(function() {
    $("#page-wrapper .location-box location-content").matchHeight();
}), $("#mobile-footer-nav").accordion({
    collapsible: !0,
    heightStyle: "content",
    beforeActivate: function(t, e) {
        if (e.newHeader[0]) s = (i = e.newHeader).next(".ui-accordion-content"); else var i = e.oldHeader, s = i.next(".ui-accordion-content");
        var o = "true" == i.attr("aria-selected");
        return i.toggleClass("ui-corner-all", o).toggleClass("ui-accordion-header-active ui-state-active ui-corner-top", !o).attr("aria-selected", (!o).toString()), 
        i.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", o).toggleClass("ui-icon-triangle-1-s", !o), 
        s.toggleClass("accordion-content-active", !o), o ? s.slideUp() : s.slideDown(), 
        !1;
    }
}), $("#services-acc").accordion({
    collapsible: !0,
    heightStyle: "content",
    beforeActivate: function(t, e) {
        if (e.newHeader[0]) s = (i = e.newHeader).next(".ui-accordion-content"); else var i = e.oldHeader, s = i.next(".ui-accordion-content");
        var o = "true" == i.attr("aria-selected");
        return i.toggleClass("ui-corner-all", o).toggleClass("ui-accordion-header-active ui-state-active ui-corner-top", !o).attr("aria-selected", (!o).toString()), 
        i.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", o).toggleClass("ui-icon-triangle-1-s", !o), 
        s.toggleClass("accordion-content-active", !o), o ? s.slideUp() : s.slideDown(), 
        !1;
    }
}), $(".jobs-content-block").accordion({
    collapsible: !0,
    heightStyle: "content",
    beforeActivate: function(t, e) {
        if (e.newHeader[0]) s = (i = e.newHeader).next(".ui-accordion-content"); else var i = e.oldHeader, s = i.next(".ui-accordion-content");
        var o = "true" == i.attr("aria-selected");
        return i.toggleClass("ui-corner-all", o).toggleClass("ui-accordion-header-active ui-state-active ui-corner-top", !o).attr("aria-selected", (!o).toString()), 
        i.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", o).toggleClass("ui-icon-triangle-1-s", !o), 
        s.toggleClass("accordion-content-active", !o), o ? s.slideUp() : s.slideDown(), 
        !1;
    }
}), $("#insurances-acc").accordion({
    collapsible: !0,
    heightStyle: "content",
    beforeActivate: function(t, e) {
        if (e.newHeader[0]) s = (i = e.newHeader).next(".ui-accordion-content"); else var i = e.oldHeader, s = i.next(".ui-accordion-content");
        var o = "true" == i.attr("aria-selected");
        return i.toggleClass("ui-corner-all", o).toggleClass("ui-accordion-header-active ui-state-active ui-corner-top", !o).attr("aria-selected", (!o).toString()), 
        i.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", o).toggleClass("ui-icon-triangle-1-s", !o), 
        s.toggleClass("accordion-content-active", !o), o ? s.slideUp() : s.slideDown(), 
        !1;
    }
}), $(window).scroll(function() {
    $(this).scrollTop() ? $("#to-top-btn").fadeIn() : $("#to-top-btn").fadeOut();
}), $(function() {
    $('a[href*="#top"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3), !1;
        }
    });
}), $(".form-box select").selectpicker({
    size: 9
}), $("#schedule-box select").selectpicker({
    size: 9
}), $(".archive-box select").selectpicker({
    size: 9
}), $("#intro-search select").selectpicker({
    size: 9
}), $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider-nav"
}), $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: !1,
    arrows: !0,
    centerMode: !1,
    focusOnSelect: !0,
    variableWidth: !1,
    responsive: [ {
        breakpoint: 1025,
        settings: {
            arrows: !1,
            centerMode: !1,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 960,
        settings: {
            arrows: !1,
            centerMode: !1,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: !1,
            centerMode: !1,
            slidesToShow: 1
        }
    } ]
}), $(function() {
    $("#schedule-content").matchHeight({
        target: $("#schedule-form"),
        property: "min-height"
    });
}), $(document).ready(function() {
    $(".search-icon").click(function() {
        $("#search-wrapper-pop").fadeToggle(600);
    });
}), $(document).ready(function() {
    $(".close-btn").click(function() {
        $("#search-wrapper-pop").fadeToggle();
    });
}), jQuery(document).ready(function(t) {
    jQuery(".search-filter").find("a[href='" + window.location.href + "']").each(function() {
        jQuery(this).addClass("active-sidebar-menu");
    });
});
//# sourceMappingURL=custom-dist.js.map