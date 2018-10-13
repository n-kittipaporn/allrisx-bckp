(function($) {
    skel.init({
        reset: 'full',
        breakpoints: {
            global: {
                range: '*',
                href: '/assets/css/style.css?v=001',
                containers: 1400,
                grid: {
                    gutters: 50
                }
            },
            wide: {
                range: '-1680',
                href: '/assets/css/style-wide.css?v=001',
                containers: 1200,
                grid: {
                    gutters: 40
                }
            },
            normal: {
                range: '-1280',
                href: '/assets/css/style-normal.css?v=001',
                containers: 960,
                grid: {
                    gutters: 30
                },
                viewport: {
                    scalable: !1
                }
            },
            narrow: {
                range: '-980',
                href: '/assets/css/style-narrow.css?v=001',
                containers: '95%',
                grid: {
                    gutters: 20
                }
            },
            narrower: {
                range: '-840',
                href: '/assets/css/style-narrower.css?v=001',
                grid: {
                    collapse: 1
                }
            },
            mobile: {
                range: '-736',
                href: '/assets/css/style-mobile.css?v=001',
                containers: '90%',
                grid: {
                    gutters: 15
                }
            },
            mobilep: {
                range: '-480',
                href: '/assets/css/style-mobilep.css?v=001',
                grid: {
                    collapse: 2
                },
                containers: '100%'
            }
        },
        plugins: {
            layers: {
                navPanel: {
                    animation: 'revealX',
                    breakpoints: 'narrower',
                    clickToHide: !0,
                    height: '100%',
                    hidden: !0,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: 'vertical',
                    position: 'top-left',
                    side: 'left',
                    width: 275
                },
                titleBar: {
                    breakpoints: 'narrower',
                    height: 44,
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><a href="/"><span class="title" data-action="copyHTML" data-args="logo"></span></a>',
                    position: 'top-left',
                    side: 'top',
                    width: '100%'
                }
            }
        }
    });
    $(function() {
        var $window = $(window),
            $body = $('body');
        $body.addClass('is-loading');
        $window.on('load', function() {
            $body.removeClass('is-loading')
        });
        var $form = $('form');
        if ($form.length > 0) {
            $form.find('.form-button-submit').on('click', function() {
                $(this).parents('form').submit();
                return !1
            });
            if (skel.vars.IEVersion < 10) {
                $.fn.n33_formerize = function() {
                    var _fakes = new Array(),
                        _form = $(this);
                    _form.find('input[type=text],textarea').each(function() {
                        var e = $(this);
                        if (e.val() == '' || e.val() == e.attr('placeholder')) {
                            e.addClass('formerize-placeholder');
                            e.val(e.attr('placeholder'))
                        }
                    }).blur(function() {
                        var e = $(this);
                        if (e.attr('name').match(/_fakeformerizefield$/)) return;
                        if (e.val() == '') {
                            e.addClass('formerize-placeholder');
                            e.val(e.attr('placeholder'))
                        }
                    }).focus(function() {
                        var e = $(this);
                        if (e.attr('name').match(/_fakeformerizefield$/)) return;
                        if (e.val() == e.attr('placeholder')) {
                            e.removeClass('formerize-placeholder');
                            e.val('')
                        }
                    });
                    _form.find('input[type=password]').each(function() {
                        var e = $(this);
                        var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));
                        if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield');
                        if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield');
                        x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e);
                        if (e.val() == '') e.hide();
                        else x.hide();
                        e.blur(function(event) {
                            event.preventDefault();
                            var e = $(this);
                            var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                            if (e.val() == '') {
                                e.hide();
                                x.show()
                            }
                        });
                        x.focus(function(event) {
                            event.preventDefault();
                            var x = $(this);
                            var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');
                            x.hide();
                            e.show().focus()
                        });
                        x.keypress(function(event) {
                            event.preventDefault();
                            x.val('')
                        })
                    });
                    _form.submit(function() {
                        $(this).find('input[type=text],input[type=password],textarea').each(function(event) {
                            var e = $(this);
                            if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', '');
                            if (e.val() == e.attr('placeholder')) {
                                e.removeClass('formerize-placeholder');
                                e.val('')
                            }
                        })
                    }).bind("reset", function(event) {
                        event.preventDefault();
                        $(this).find('select').val($('option:first').val());
                        $(this).find('input,textarea').each(function() {
                            var e = $(this);
                            var x;
                            e.removeClass('formerize-placeholder');
                            switch (this.type) {
                                case 'submit':
                                case 'reset':
                                    break;
                                case 'password':
                                    e.val(e.attr('defaultValue'));
                                    x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
                                    if (e.val() == '') {
                                        e.hide();
                                        x.show()
                                    } else {
                                        e.show();
                                        x.hide()
                                    }
                                    break;
                                case 'checkbox':
                                case 'radio':
                                    e.attr('checked', e.attr('defaultValue'));
                                    break;
                                case 'text':
                                case 'textarea':
                                    e.val(e.attr('defaultValue'));
                                    if (e.val() == '') {
                                        e.addClass('formerize-placeholder');
                                        e.val(e.attr('placeholder'))
                                    }
                                    break;
                                default:
                                    e.val(e.attr('defaultValue'));
                                    break
                            }
                        });
                        window.setTimeout(function() {
                            for (x in _fakes) _fakes[x].trigger('formerize_sync');
                        }, 10)
                    });
                    return _form
                };
                $form.n33_formerize()
            }
        }
        $('#nav > ul').dropotron({
            offsetY: -15,
            hoverDelay: 0,
            alignment: 'center',
            expandMode: 'click'
        })
    })
})(jQuery)