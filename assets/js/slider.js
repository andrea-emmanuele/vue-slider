let slider = new Vue({
    el: "#slider",
    data: {
        i: 0,
        images: [
            "https://picsum.photos/id/30/800/500",
            "https://picsum.photos/id/29/800/500",
            "https://picsum.photos/id/16/800/500",
            "https://picsum.photos/id/12/800/500"
        ],
        isActive: "active"
    },
    methods: {
        prev: function () {
            const i = this.i;
            const length = this.images.length - 1;

            if (i < 1) {
                this.i = length;
            }
            else
                this.i--;
        },
        next: function () {
            const i = this.i;
            const length = this.images.length - 1;

            if (i >= length) {
                this.i = 0;
            }
            else
                this.i++;
        },
        move: function (i) {
            this.i = i;
        },
        interval: function () {
            setInterval(this.next, 3000);
        }
    },
    created: function () {
        this.interval();
    }
})