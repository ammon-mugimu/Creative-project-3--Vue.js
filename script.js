
var app = new Vue({
    el: '#app',
    data: {
        image: '',
        message: '',
        loading: true,
    },
    created: function () {
        this.jobs();
    },
    methods: {
        jobs: function () {
            this.loading = true;
            fetch(`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=Great.%20let\'s%20Begin! Type the text that you want to generate a QR code for.`).then(response => {
                return response;
            }).then(json => {
                this.image = json.url;
                this.loading = false;
            }).catch(err => {                
            });
        },
        generateQrCode: function ()  {
            this.loading = true;
            fetch('https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=' + this.message).then(response => {
                return response;
            }).then(json => {
                this.image = json.url;
                this.message = '';
                this.loading = false;
            }).catch(err => {                
            });
        },
    }
});