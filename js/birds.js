/**
 * Created by Sorzen on 2016/6/26.
 */
//function Bird(ctx, img, speedY, frame, direction, x, y, clipX, clipY) {
//    this.ctx = ctx;
//    this.img = img;
//    this.frame = frame;
//    this.direction = direction;
//    this.x = x;
//    this.y = y;
//    this.speedY = speedY;
//    //this.clipX = clipX * this.frame;
//    //this.clipY = clipY;
//}
//ctx, img
function Bird(pragram) {
    this.options = {
        frame: 0,
        direction: 0,
        clipW: 52,
        clipH: 45,
        x: 30,
        y: 30,
        width: 52,
        height: 45,
        speedY: 4,
        speedPlus:0.5,
    }
    extend(this.options, pragram);
}

Bird.prototype.draw = function () {
    this.options.ctx.save();//���浱ǰ״̬
    //����ý���Ҫ����ͼ�ε����ĵ�
    var centerPointX = this.options.x + this.options.width / 2;
    var centerPointY = this.options.y + this.options.height / 2;
    //������ϵƽ�Ƶ�������ĵ�
    this.options.ctx.translate(centerPointX, centerPointY);
    //��ת����ϵ��ָ������
    //var rotateDeg = 30*this.options.speedY;
    var rotateDeg = angleToRad(15*this.options.speedY)>angleToRad(30)?angleToRad(30):angleToRad(15*this.options.speedY);
    this.options.ctx.rotate(rotateDeg);
    //����ͼ��
    this.options.ctx.drawImage(this.options.img, 52 * this.options.frame, this.options.clipX, this.options.clipW, this.options.clipH, -this.options.width / 2, -this.options.height / 2, this.options.width, this.options.height);
    this.options.ctx.restore();//�ָ���һ�α���״̬
}

Bird.prototype.update = function () {
    this.options.frame = ++this.options.frame % 3;
    this.options.y += this.options.speedY;
    this.options.speedY += this.options.speedPlus;


}
//extend(Bird.prototype,{
//    drawImage:function(){
//        this.ctx.drawImage(imgsPath,50,50,52,45);
//    }
//})