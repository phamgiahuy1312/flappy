/**
 * Created by Sorzen on 2016/6/27.
 */
function Pipe(pragram) {
    this.options = {
        frame: 0,
        direction: 0,
        clipW: 52,
        clipH: 45,
        x: 100,
        y: 30,
        width: 52,
        height: 45,
        speedX: -4,
        speedPlus: 1,
    }
    extend(this.options, pragram);
    this.options.centerDis = 150;//���ܵ�����
    this.options.height = Math.random() * 150 + 20;//������ɹܵ��߶ȣ����170 �����20
    this.options.upY = this.options.height - this.options.upImg.height;//�Ϸ��ܵ�y������
    this.options.downY = this.options.height + this.options.centerDis; //�¹ܵ�y������
    extend(Pipe.prototype, {
        draw: function () {
            this.options.ctx.drawImage(this.options.upImg, this.options.x, this.options.upY, this.options.upImg.width, this.options.upImg.height);//�����Ϲܵ�
            this.options.ctx.drawImage(this.options.downImg, this.options.x, this.options.downY, this.options.downImg.width, this.options.downImg.height);//�����¹ܵ�


            ////���ƹܵ�·��
            this.options.ctx.strokeStyle = "rgba(0,0,0,0)";
            this.options.ctx.rect(this.options.x,this.options.upY,this.options.upImg.width,this.options.upImg.height);

            //console.log(this.options.x);
            this.options.ctx.rect(this.options.x,this.options.downY,this.options.upImg.width,this.options.upImg.height);
            this.options.ctx.stroke();
        },


        update: function () {

            this.options.x += this.options.speedX;//ÿ���ƶ�����
            //this.options.speedX += this.options.speedPlus;//�ܵ��ƶ�����
            if (this.options.x < -this.options.downImg.width-50) {
                this.options.height = Math.random() * 150 + 20;//������ɹܵ��߶ȣ����170 �����20
                this.options.upY = this.options.height - this.options.upImg.height;//�Ϸ��ܵ�y������
                this.options.downY = this.options.height + this.options.centerDis; //�¹ܵ�y������
                this.options.x = this.options.downImg.width * 3 * 6 -100;//����һ���ܵ���ȥʱ���ܵ���أ��������ֲ�ͼ��
            }
        }
    })
}