<template>
    <div class="online-week">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 p-0">
                    <div class="menu-list">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Трансляция</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 p-0">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="content">
                                <h2 class="title">Онлайн трансляция</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                background-color: #fff;
                padding: 10px 1rem 0 ;
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
                    background: #fff;
                    border-bottom: 5px solid #326FEE;
                    padding: 15px 20px;
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
                justify-content: left;
            }
        }
        .tab-pane{
            padding: 65px 50px;
        }
        .content{
            .title{
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 37px;
                color: #333333;
                margin-bottom: 16px;
            }
        }
    }
</style>
