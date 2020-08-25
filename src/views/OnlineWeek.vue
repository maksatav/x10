<template>
    <div class="online-week">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 p-0">
                    <div class="menu-list">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Обзор</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Ресурсы</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 p-0">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="content">
                                <h2 class="title">Онлайн курс “Организация системы маркетинга”</h2>
                                <p class="week">Неделя 1 из 5</p>
                                <a-steps :current="current_week - 1">
                                    <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
                                        <template slot="content">
                                            <span>Неделя {{ index + 1 }}</span>
                                        </template>
                                        <span :class="`${prefixCls}-icon-dot`" />
                                    </a-popover>
                                    <a-step title="1 неделя" v-for="item in 5"/>
                                </a-steps>
                                <div class="accordion accordion-icons" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <img src="../assets/image/icon/time2.png" class="mr-2"> Неделя 1
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body d-flex align-items-center justify-content-between">
                                                <div>
                                                    <img src="../assets/image/icon/test.png"> 
                                                    <span class="test">Тест</span> 
                                                    <p class="mb-0 title">Организация системы</p>
                                                </div>
                                                <div>
                                                    <p class="mb-0 date">Срок: 15 мая</p>
                                                    <img src="../assets/image/icon/info.png">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div class="content">
                                <h2 class="title">Онлайн курс “Организация системы маркетинга”</h2>
                                <p class="week mb-3">Неделя 1 из 5</p>
                                <a href="#" class="link">Ссылка</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css';

export default {
    name: 'online-week',
    data() {
        return{
            current_week: 1
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .online-week{
        .row{
            margin-right: -15px;
            margin-left: -15px;
        }
        .menu-list{
            background: #F2F3F5;
            padding: 60px 0;
            height: 100%;
            @media (max-width: 768px) {
                padding: 10px 0 0 0;
            }
            .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
                color: #fff;
                background-color: #fff;
                border-radius: 0;
                padding: 15px 30px;
                color: #333333;
                border-left: 10px solid #326FEE;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                color: #333333;
                @media (max-width: 768px) {
                    border-left: none;
                    background: #F2F3F5;
                    border-bottom: 5px solid #326FEE;
                    padding: 15px 40px;
                }
            }
            .nav-pills .nav-link {
                border-radius: .25rem;
                padding: 15px 40px;
                @extend %style-one;
                color: #333333;
            }
        }
        .nav{
            @media (max-width: 768px) {
                flex-direction: row !important;
                justify-content: center;
            }
        }
        .tab-pane{
            padding: 65px 50px;
            @media (max-width: 768px) {
                padding: 1rem;
            }
        }
        .content{
            .title{
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 37px;
                color: #333333;
                margin-bottom: 16px;
                @media (max-width: 768px) {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
            .week{
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                letter-spacing: -0.3px;
                color: #1B213E;
                margin-bottom: 65px;
                @media (max-width: 768px) {
                    font-size: 12px;
                    line-height: 15px;
                    color: #767676;
                    margin-bottom: 50px;
                }
            }
            .accordion{
                margin-top: 60px;
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
                    >div{
                        display: flex;
                        align-items: center;
                        .test{
                            color: #DADADA;
                            @extend %style-two;
                            margin: 0 30px 0 20px;
                        }
                        .title{
                            color: #333333;
                            @extend %style-two;
                            @media (max-width: 768px) {
                                display: none;
                            }
                        }
                        .date{
                            color: #219653;
                            margin-right: 50px;
                            @extend %style-one;
                            @media (max-width: 768px) {
                                margin-right: 1rem;
                            }
                        }
                    }
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
            .link{
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                letter-spacing: -0.3px;
                color: #326FEE;
            }
        }
    }
</style>

<style>
    .ant-steps-dot .ant-steps-item-tail::after, .ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
        width: calc(100% - 0px);
        height: 3px;
        margin-left: 0;
    }
    .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
        background: #F2F3F5;
    }
    .ant-steps-item-tail::after {
        background: #F2F3F5 !important;
    }
    @media (max-width: 425px) {
        .ant-steps{
            padding: 1rem;
            overflow-x: scroll;
        }
    }
</style>