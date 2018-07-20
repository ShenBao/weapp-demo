//index.js
//获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

        icon: './../../imgs/usericon.jpg',
        goods: './../../imgs/goodsicon.jpg',
        qrcode: './../../imgs/qrcode.jpg'

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        let that = this;

        let icon = 'http://img.starft.cn/dmstore/p/52779';
        let goods = 'http://img.starft.cn/dmstore/p/23@300h_300w_1e_1c';
        let qrcode = 'http://img.starft.cn/dmstore/p/45070';

        wx.getImageInfo({
            src: icon,
            success: (res1) => {

                console.log(res1);

                wx.getImageInfo({
                    src: goods,
                    success: (res2) => {
                        console.log(res2);
                        wx.getImageInfo({
                            src: qrcode,
                            success: (res3) => {

                                console.log(res3);

                                let data = {
                                    icon: res1.path,
                                    goods: res2.path,
                                    qrcode: res3.path,
                                }

                                console.log('data:', data);

                                that.saveImage(data);

                            }
                        })
                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })
            }
        })


    },


    saveImage: function(opts) {


        let data = {
            goodsName: 'EVY防晒慕斯SPF30成人用150ml',
            goodsPrice: '￥25.90',
            campaignPrice: '￥78.90',
            goodsIcon: opts.goods,
            goodsQrcode: opts.qrcode,
            userName: '大名',
            userIcon: opts.usericon,
        }

        var canvasCtx = wx.createCanvasContext('shareCanvas');
        //绘制背景
        canvasCtx.setFillStyle('white');
        canvasCtx.fillRect(0, 0, 390, 800);

        //绘制商品图片
        canvasCtx.drawImage(opts.goods, 0, 0, 375, 375, 375, 375);

        // 用户头像
        canvasCtx.save();
        canvasCtx.beginPath()
        canvasCtx.arc(40, 400, 20, 0, 2 * Math.PI)
        canvasCtx.clip()
        canvasCtx.drawImage(opts.icon, 20, 380, 40, 40)
        canvasCtx.restore();

        // 绘制用户名
        canvasCtx.setFontSize(15);
        canvasCtx.setFillStyle('#999999');
        canvasCtx.fillText(data.userName + '    推荐你看', 70, 405, 300);

        // 绘制商品名称
        let text = data.goodsName + '这是goodsName' + data.goodsName + data.goodsName;
        let chr = text.split("");
        let temp = "";
        let row = [];
        canvasCtx.setFontSize(15)
        canvasCtx.setFillStyle("#333")
        for (let a = 0; a < chr.length; a++) {
            if (canvasCtx.measureText(temp).width < 220) {
                temp += chr[a];
            } else {
                a--;
                row.push(temp);
                temp = "";
            }
        }
        row.push(temp);

        //如果数组长度大于2 则截取前两个
        if (row.length > 2) {
            let rowCut = row.slice(0, 2);
            let rowPart = rowCut[1];
            let test = "";
            let empty = [];
            for (let a = 0; a < rowPart.length; a++) {
                if (canvasCtx.measureText(test).width < 200) {
                    test += rowPart[a];
                } else {
                    break;
                }
            }
            empty.push(test);
            let group = empty[0] + "..."
            rowCut.splice(1, 1, group);
            row = rowCut;
        }
        for (let b = 0; b < row.length; b++) {
            canvasCtx.fillText(row[b], 20, 450 + b * 20 - 0.3, 300);
            canvasCtx.fillText(row[b], 20, 450 + b * 20 + 0.3, 300);
        }

        // 绘制价格
        canvasCtx.setFontSize(22);
        canvasCtx.setFillStyle('red');
        canvasCtx.fillText(data.goodsPrice, 20, 500);

        // 团购价钱
        canvasCtx.setFontSize(13);
        canvasCtx.setFillStyle('#666');
        canvasCtx.fillText(data.campaignPrice, 20, 520);

        canvasCtx.beginPath()
        canvasCtx.setFillStyle('#666')
        canvasCtx.setLineWidth(1);
        canvasCtx.moveTo(22, 515)
        canvasCtx.lineTo(70, 515)
        canvasCtx.stroke()

        // 生成二维码
        canvasCtx.drawImage(opts.qrcode, 260, 400, 80, 80);


        canvasCtx.draw();

    },


    saveImg: function() {
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 390,
            height: 800,
            destWidth: 390,
            destHeight: 800,
            canvasId: 'shareCanvas',
            success: function(res) {

                console.log(res.tempFilePath);

                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: (res) => {
                        console.log(res)
                        wx.showToast({
                            title: '保存成功',
                        })
                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })

            },
            fail: function(res) {

            }
        })
    },


    /**
     * 渲染文字
     * 
     */

    // x       Number      绘制文本的左上角x坐标位置
    // y       Number      绘制文本的左上角y坐标位置
    // color   Color       字体的颜色
    // size    Number      字体的字号
    // align   String          文字的对齐，可选值 'left'、'center'、'right'
    // baseline    String      设置文字的水平对齐，可选值 'top'、'bottom'、'middle'、'normal'
    // text        String          在画布上绘制被填充的文本。boldBoolean是否加粗

    drawText: function(obj) {
        console.log('渲染文字')
        this.ctx.save();
        this.ctx.setFillStyle(obj.color);
        this.ctx.setFontSize(obj.size);
        this.ctx.setTextAlign(obj.align);
        this.ctx.setTextBaseline(obj.baseline);
        if (obj.bold) {
            console.log('字体加粗')
            this.ctx.fillText(obj.text, obj.x, obj.y - 0.5);
            this.ctx.fillText(obj.text, obj.x - 0.5, obj.y);
        }
        this.ctx.fillText(obj.text, obj.x, obj.y);
        if (obj.bold) {
            this.ctx.fillText(obj.text, obj.x, obj.y + 0.5);
            this.ctx.fillText(obj.text, obj.x + 0.5, obj.y);
        }
        this.ctx.restore();
    },

    /**
     * 文本换行
     */

    // x       Number          绘制文本的左上角x坐标位置
    // y       Number          绘制文本的左上角y坐标位置
    // width   Number      文本区域宽度
    // height  Number      文本行高
    // line        Number      最多显示几行
    // color       Color           字体的颜色
    // size        Number          字体的字号
    // align       String文字的对齐，可选值 'left'、'center'、'right'
    // baseline    String设置文字的水平对齐，可选值 'top'、'bottom'、'middle'、'normal'
    // text        String在画布上绘制被填充的文本。boldBoolean是否加粗

    textWrap: function(obj) {
        console.log('文本换行')
        var td = Math.ceil(obj.width / (obj.size));
        var tr = Math.ceil(obj.text.length / td);
        for (var i = 0; i < tr; i++) {
            var txt = {
                x: obj.x,
                y: obj.y + (i * obj.height),
                color: obj.color,
                size: obj.size,
                align: obj.align,
                baseline: obj.baseline,
                text: obj.text.substring(i * td, (i + 1) * td),
                bold: obj.bold
            };
            if (i < obj.line) {
                if (i == obj.line - 1) {
                    txt.text = txt.text.substring(0, txt.text.length - 3) + '......';
                }
                this.drawText(txt);
            }
        }
    },


    /**
     * 获取文本折行
     */

    // width       Number      文本区域宽度
    // size        Number      字体的字号
    // text        String          在画布上绘制被填充的文本
    
    getTextLine: function(obj) {
        this.ctx.setFontSize(obj.size);
        let arrText = obj.text.split('');
        let line = '';
        let arrTr = [];
        for (let i = 0; i < arrText.length; i++) {
            var testLine = line + arrText[i];
            var metrics = this.ctx.measureText(testLine);
            var width = metrics.width;
            if (width > obj.width && i > 0) {
                arrTr.push(line);
                line = arrText[i];
            } else {
                line = testLine;
            }
            if (i == arrText.length - 1) {
                arrTr.push(line);
            }
        }
        return arrTr;
    },

})