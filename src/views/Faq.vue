<template>
    <div class="faq">
        <div class="faq__top">
            <h1>Часто задаваемые вопросы</h1>
        </div>
        <div class="faq__question">
            <div class="accordion accordion-icons" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Как накопить X бонусы?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            Вы можете накопить бонусы, приобретая курсы бизнес площадки х10. Каждый курс имеет определенные баллы. За прохождение курса и выполнения задание/ий, присуждаются баллы.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Как потратить X бонусы?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            Вы можете накопить бонусы, приобретая курсы бизнес площадки х10. Каждый курс имеет определенные баллы. За прохождение курса и выполнения задание/ий, присуждаются баллы.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'faq',
    data(){
        return{
            questionIndex: 0
        }
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .faq{
        &__top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 13px 1rem;
            }
            h1{
                width: 960px;
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 32px;
                letter-spacing: -0.3px;
                color: #32768D;
                margin: 0 auto;
                @media (max-width: 768px) {
                    width: 100%;
                    text-align: center;
                    font-size: 16px;
                }
            }
        }
        &__question{
            width: 960px;
            margin: 0 auto;
            padding: 40px 0;
            @media (max-width: 768px) {
                width: 100%;
                padding: 40px 1rem;
            }
            .card{
                border: none;
                margin-bottom: 7px;
                .card-header{
                    border-bottom: none;
                    background: #FAFAFA;
                    border-radius: 5px;
                    button{
                        box-shadow: none;
                        text-decoration: none;
                        color: #333333;
                        @extend %style-two;
                        p{
                            @extend %style-one;
                        }
                    }
                }
                .card-body{
                    margin-top: 7px;
                    border-radius: 5px;
                    padding: 18px 32px;
                    border: 1px solid #F2F2F2;
                }
            }
            .accordion-icons .card-header .btn {
                position: relative;
            }
            .accordion-icons .card-header .btn:before {
                content: '';
                width: 9px;
                height: 9px;
                position: absolute;
                right: 10px;
                top: 10px;
                border-right: 2px solid #333333;
                border-bottom: 2px solid #333333;
                transform: rotate(45deg);
            }
            .accordion-icons .card-header .btn[aria-expanded="true"]:before {
                transform: rotate(225deg);
                top: 15px;
            }
        }
    }
</style>