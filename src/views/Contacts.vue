<template>
    <div class="contacts">
        <div class="container">
            <div class="contact-block">
                <h1>Контакты</h1>
                <hr>
                <p class="mt-5">
                    <img src="../assets/image/icon/phone.png">
                    +7 (707) 808-80-90 ; +7 (707) 70-77-00
                </p>
                <p>
                    <img src="../assets/image/icon/email.png">
                    x10@gmail.com
                </p>
                <p>
                    <img src="../assets/image/icon/place.png">
                    г. Алматы, ул Достык 123
                </p>
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contacts',
    mounted() {
        var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [43.236051, 76.907876],
                zoom: 12,
                zoomControl: false,
                fullscreenControl: false
            });

            DG.marker([43.227349,76.901328]).addTo(map).bindPopup('Вы кликнули по мне!');
        });
        window.scrollTo(0,0)
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .contacts{
        background: #F3F3F3;
        padding: 40px 0;
        .container{
            max-width: 900px;
        }
        .contact-block{
            width: 900px;
            padding: 40px 125px;
            background: #ffffff;
            border: 1px solid #E4E4E4;
            @media (max-width: 768px) {
                width: 100%;
                padding: 40px 1rem;
            }
            h1{
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 37px;
                color: #333333;
                margin-bottom: 30px;
                text-align: center;
                @media (max-width: 768px) {
                    font-size: 18px;
                    line-height: 19px;
                }
            }
            p{
                img{
                    width: 20px;
                    height: 15px;
                    object-fit: contain;
                    margin-right: 28px;
                }
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-one;
                margin-bottom: 26px;
            }
            #map{
                width: 425px; 
                height: 200px;
                @media (max-width: 768px) {
                    width: 100%;
                }
            }
        }
    }
</style>