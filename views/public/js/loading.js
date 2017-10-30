define(['widget' ],function(widget){
    function Loading(){
        this.options = {
            content: "正在加载数据……",
            icon: '<i class="am-icon-spinner am-icon-spin"></i>',
            width:200,
            heigth:100,
            timeout:10000 , //超时时间
            color:"#fff",
            layerStyle: {
                backgroundColor: "#000",
                opacity: "0.3"
            }
        };
    }
    Loading.prototype = $.extend({}, new widget.Widget(), {
        renderUI: function(){
            this.boundingBox = $(
                '<div style="text-align: center">' +
                    '<div>'+this.options.icon+'</div>' +
                    '<div style="padding-top:10px">'+this.options.content+'</div>'+
                '</div>'
            );
            this._mask = $('<div class="window_mask"></div>');
            this._mask.appendTo("body");

            var that = this;
            setTimeout(function(){
                that.close();
            },this.options.timeout)
        },
        syncUI:function(){
            this.boundingBox.css({
                color: this.options.color,
                position: "absolute",
                left : (this.options.x || ($(document).width() - this.options.width)/2) + "px",
                top : (this.options.y || ($(document).height() - this.options.heigth)/2) + "px",
                zIndex:9999,
            });
            this._mask.css({
                position: "absolute",
                top:0,
                left:0,
                width:$(document).width(),
                height:$(document).height(),
                zIndex:9990,
            }).css(this.options.layerStyle)
        },
        destructor:function(){
            this._mask && this._mask.remove();
        },
        open: function(options){
            $.extend(this.options, options);
            this.render();
            return this;
        },
        close: function(){
            this.destroy();
        }
    })

    return Loading;

})
