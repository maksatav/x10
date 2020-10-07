<template>
    <div class="course" v-if="course">
        <!-- <pre>{{course}}</pre> -->
        <!-- <pre>{{course_section}}</pre> -->
        <div class="course-image">
            <div class="container">
                <h1>{{course.title}}</h1>
            </div>
        </div>
        <div class="course-description">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="learn">
                            <h6>ЧЕМУ ВЫ НАУЧИТЕСЬ </h6>
                            <div class="row">
                                <div class="col-lg-6">
                                    <p>Сможете расширять браузерные
                                        приложений на основе MVC.</p>
                                    <p>Разделение клиентской и сервер
                                        нойстороны.</p>
                                    <p>Проектирование пользовательского 
                                        интерфейса.</p>
                                    <p>Angular представляет не только 
                                        инструменты, но и шаблоны дизайна</p>
                                </div>
                                <div class="col-lg-6">
                                    <p>Сможете расширять браузерные
                                        приложений на основе MVC.</p>
                                    <p>Разделение клиентской и сервер
                                        нойстороны.</p>
                                    <p>Проектирование пользовательского 
                                        интерфейса.</p>
                                    <p>Angular представляет не только 
                                        инструменты, но и шаблоны дизайна</p>
                                </div>
                            </div>
                        </div>
                        <div class="buy-course-card buy-course-card-mobile">
                            <img :src="course.imageUrl" class="buy-course-card__image buy-course-card-mobile__image">
                            <div class="buy-course-card__description buy-course-card-mobile__description">
                                <h6>Этот курс включает в себя</h6>
                                <p class="text"><img src="../assets/image/icon/time.png"> 30 часов видео уроков</p>
                                <p class="text"><img src="../assets/image/icon/file.png"> 15 материалов для скачивания</p>
                                <p class="text"><img src="../assets/image/icon/book.png"> 3 статьи </p>
                                <!-- <p class="text"><img src="../assets/image/icon/prize.png"> Сертификат при окончании </p> -->
                                <div class="d-flex align-items-center mb-3">
                                    <star-rating 
                                        :rating="setRating(String(course.rating))" 
                                        active-color="#FFCB4C" 
                                        :read-only="true" 
                                        :max-rating="5" 
                                        :increment="0.5"
                                        :star-size="17"
                                        :show-rating="false"
                                        class="justify-content-center">
                                    </star-rating>
                                    <p class="mb-0 ml-2 rating">{{course.rating}} <span>({{course.studentCount}})</span></p>
                                </div>
                                <p class="price">{{ course.price }}тг</p>
                                <div v-if="course.courseTypeEnum === 'OFFLINE'">
                                    <button type="button" class="btn" v-if="user" >Оставить заявку</button>
                                    <router-link to="/Registration" class="btn link" v-else>Оставить заявку</router-link>
                                </div>
                                <div v-else>
                                    <!-- <button type="button" class="btn" v-if="course.available">Куплено</button>
                                    <button type="button" class="btn" @click="buyCourse(course.id)" v-else>Купить</button> -->
                                    <button type="button" class="btn" v-if="user" @click="leaveRequestOnline(course.id)">Оставить заявку</button>
                                    <router-link to="/Registration" class="btn link" v-else>Оставить заявку</router-link>
                                </div>
                                <a href="javascript:void(0);"><img src="../assets/image/icon/share.png"> Поделиться</a>
                            </div>
                        </div>
                        <div class="teacher">
                            <div class="teacher-image text-center">
                                <img :src="course.mentor.imageUrl" class="mb-2">
                                <star-rating 
                                    :rating="4" 
                                    active-color="#FFCB4C" 
                                    :read-only="true" 
                                    :max-rating="5" 
                                    :increment="0.5"
                                    :star-size="17"
                                    :show-rating="false"
                                    class="justify-content-center"
                                >
                                </star-rating>
                                <span>4,3 (4к)</span>
                            </div>
                            <div class="teacher-description">
                                <h6 class="name">{{ course.mentor.name }}</h6>
                                <p class="kurs">Курсов <span>{{ course.mentor.totalCourses ? course.mentor.totalCourses : 0 }}</span></p>
                                <p class="students">Студентов <span>{{ course.mentor.totalStudents ? course.mentor.totalStudents : 0 }}</span></p>
                                <p class="text1">{{ course.mentor.title }}</p>
                                <p class="text2">{{ course.mentor.description }}</p>
                            </div>
                        </div>
                        <p class="text1 text1-mobile">{{ course.mentor.title }}</p>
                        <p class="text2 text2-mobile">{{ course.mentor.description }}</p>
                        <div class="all-kurs" v-if="course.courseTypeEnum === 'ONLINE' && course_section">
                            <h6 class="mb-4">Весь курс</h6>
                            <div class="accordion accordion-icons" id="accordionExample" v-for="courseLabel in course_section.data">
                                <div class="card" v-for="(item, index) in courseLabel.courseLabelList" :key="index">
                                    <div class="card-header" :id="'heading' + index">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left d-flex align-items-center justify-content-between collapsed" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" aria-controls="collapseOne">
                                            <span>{{ item.name }}</span>
                                            <!-- <p class="mb-0">5 лекции <span>35 мин</span></p> -->
                                            </button>
                                        </h2>
                                    </div>
                                    <div :id="'collapse' + index" class="collapse" :aria-labelledby="'heading' + index" data-parent="#accordionExample">
                                        <div class="card-body d-flex align-items-center justify-content-between">
                                            <p class="mb-0 description">{{ item.content }}</p>
                                            <p class="mb-0" v-if="item.videoDuration">{{ item.videoDuration | msToTime}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="opisanie" v-if="course.courseTypeEnum === 'ONLINE'">
                            <h6 class="mb-4">Описание</h6>
                            <p class="mb-0">
                                {{ course.description }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="buy-course-card">
                            <img :src="course.imageUrl" class="buy-course-card__image">
                            <div class="buy-course-card__description">
                                <h6>Этот курс включает в себя</h6>
                                <p class="text"><img src="../assets/image/icon/time.png"> 30 часов видео уроков</p>
                                <p class="text"><img src="../assets/image/icon/file.png"> 15 материалов для скачивания</p>
                                <p class="text"><img src="../assets/image/icon/book.png"> 3 статьи </p>
                                <!-- <p class="text"><img src="../assets/image/icon/prize.png"> Сертификат при окончании </p> -->
                                <div class="d-flex align-items-center mb-3">
                                    <star-rating 
                                        :rating="setRating(String(course.rating))" 
                                        active-color="#FFCB4C" 
                                        :read-only="true" 
                                        :max-rating="5" 
                                        :increment="0.5"
                                        :star-size="17"
                                        :show-rating="false"
                                        class="justify-content-center">
                                    </star-rating>
                                    <p class="mb-0 ml-2 rating">{{course.rating}} <span>({{course.studentCount}})</span></p>
                                </div>
                                <p class="price">{{ course.price }}тг</p>
                                <div v-if="course.courseTypeEnum === 'OFFLINE'">
                                    <button type="button" class="btn" v-if="user" >Оставить заявку</button>
                                    <router-link to="/Registration" class="link btn" v-else>Оставить заявку</router-link>
                                </div>
                                <div v-else>
                                    <!-- <button type="button" class="btn" v-if="course.available">Куплено</button>
                                    <button type="button" class="btn" @click="buyCourse(course.id)" v-else>Купить</button> -->
                                    <button type="button" class="btn" v-if="user" @click="leaveRequestOnline(course.id)">Оставить заявку</button>
                                    <router-link to="/Registration" class="btn link" v-else>Оставить заявку</router-link>
                                </div>
                                <a href="javascript:void(0);"><img src="../assets/image/icon/share.png"> Поделиться</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header p-2">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center py-5">
                        <h4>Спасибо за заявку</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: 'course',
    mounted() {
        this.$store.dispatch('GET_COURSE', this.$route.params.id)
        this.$store.dispatch('GET_COURSE_SECTION_WITHOUT_TOKEN', this.$route.params.id)
        this.$store.dispatch('SET_USER_FROM_TOKEN')
        window.scrollTo(0,0)
    },
    filters: {
        msToTime(duration) {
            var milliseconds = parseInt((duration%1000))
                , minutes = parseInt((duration/(1000*60))%60)
                , hours = parseInt((duration/(1000*60*60))%24);

            hours = (hours < 10) ? "" + hours : hours;
            minutes = (minutes < 10) ? "" + minutes : minutes;

            if(hours === '0') {
            return minutes + " мин";
            } else if(minutes === '0') {
                return hours + " час";
            } else {
            return hours + " час, " + minutes + " мин";
            }
        }
    },
    computed: {
        course() {
            return this.$store.getters.COURSE()
        },
        course_section() {
            return this.$store.getters.COURSE_SECTION_WITHOUT_TOKEN()
        },
        user() {
            return this.$store.getters.GET_USER()
        },
    },
    methods: {
        buyCourse(id) {
            const data = {
                payerUser: {
                    id: localStorage.getItem('id')
                },
                orderLineList: [
                    {
                        course: {
                            id: id
                        }
                    }
                ]
            }
            this.$store.dispatch('GET_PURCHASED_COURSE', data)
            .then(response => {
                console.log(response)
                window.location.href = response.data.location;
            }).catch(err => {
                console.log(err)
            })
        },
        leaveRequestOnline(id) {
            const data = {
                date: "2020-03-31T17:30:08",
                comment: "Test",
                user : {
                    id: localStorage.getItem('id')
                },
                course: {
                    id: id
                }
            }
            this.$store.dispatch('GET_REQUEST', data)
            .then(response => {
                $('#thankyouModal').modal('show');
            }).catch(err => {
                console.log(err)
                alert('Ошибка')
            })
        },
        setRating(rating) {
            if(rating === '0.1'){
                return (0.5)
            } else if(rating === '0.2'){
                return (1)
            } else if(rating === '0.3'){
                return (1.5)
            } else if(rating === '0.4'){
                return (2)
            } else if(rating === '0.5'){
                return (2.5)
            } else if(rating === '0.6'){
                return (3)
            } else if(rating === '0.7'){
                return (3.5)
            } else if(rating === '0.8'){
                return (4)
            } else if(rating === '0.9'){
                return (4.5)
            } else if(rating === '1'){
                return (5)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .course{
        .course-image{
            background-image: url(../assets/image/course/1.png);
            width: 100%;
            min-height: 305px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            @media (max-width: 768px) {
                background-image: url(../assets/image/course/mobile.png);
                min-height: 240px;
            }
            .container{
                max-width: 1240px;
            }
            h1{
                padding-top: 90px;
                font-style: normal;
                font-weight: 500;
                font-size: 40px;
                line-height: 49px;
                color: #FFFFFF;
                @media (max-width: 768px) {
                    font-size: 20px;
                    line-height: 24px;
                    padding-top: 60px;
                }
            }
        }
        .course-description{
            padding: 40px 0;
            @media (max-width: 768px) {
                padding: 20px 0;
            }
            .container{
                max-width: 1240px;
            }
            .learn{
                padding: 12px 40px;
                background: #FAFAFA;
                border-radius: 5px;
                margin-bottom: 40px;
                h6{
                    margin-bottom: 25px;
                    color: #333333;
                    @extend %style-two;
                }
                p{
                    margin-bottom: 18px;
                    @extend %style-one;
                    position: relative;
                    margin-left: 14px;
                    &:before{
                        content: '';
                        width: 7px;
                        height: 7px;
                        background: #03B3E4;
                        border-radius: 50%;
                        position: absolute;
                        left: -14px;
                        top: 5px;
                    }
                }
            }
            .teacher{
                display: flex;
                align-items: flex-start;
                margin-bottom: 40px;
                .teacher-image{
                    margin-right: 40px;
                    img{
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    span{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        color: #E0E0E0;
                    }
                }
                .teacher-description{
                    .name{
                        @extend %style-one;
                        color: #333333;
                        margin-bottom: 13px;
                    }
                    .kurs,.students{
                        @extend %style-one;
                        color: rgba(0, 0, 0, 0.5);
                        width: 180px;
                        display: flex;
                        align-items: center;
                        margin-bottom: 9px;
                        span{
                            margin-left: auto;
                            display: block;
                            @extend %style-two;
                            color: #333333;
                        }
                    }
                }
            }
            .text1{
                margin-top: 24px;
                @extend %style-two;
                color: #333333;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .text2{
                margin-top: 24px;
                @extend %style-one;
                color: #333333;
                white-space: pre-line;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .text1-mobile,.text2-mobile{
                display: none;
                @media (max-width: 768px) {
                    display: block;
                }
            }
            .all-kurs{
                margin-bottom: 40px;
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
                            span{
                                margin-left: 25px;
                                width: 60%;
                                white-space: pre-line;
                            }
                            p{
                                @extend %style-one;
                                span{
                                    margin-left: 35px;
                                }
                            }
                        }
                    }
                    .description{
                        width: 80%;
                        white-space: pre-line;
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
                    position: absolute;
                    content: "+";
                    left: 0;
                    top: 3px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    color: #F05E67;
                }
                .accordion-icons .card-header .btn[aria-expanded="true"]:before {
                    content: "-";
                }
            }
            .opisanie{
                p{
                    @extend %style-one;
                    color: #333333;
                    white-space: pre-line;
                }
            }
            .buy-course-card{
                width: 350px;
                border-radius: 5px;
                background: #FFFFFF;
                position: absolute;
                top: -12rem;
                left: 2rem;
                &__image{
                    width: 350px;
                    height: 180px;
                    object-fit: cover;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                &__description{
                    padding: 12px 30px;
                    border-left: 1px solid #F2F2F2;
                    border-right: 1px solid #F2F2F2;
                    border-bottom: 1px solid #F2F2F2;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    h6{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 22px;
                        color: #333333;
                        margin-bottom: 15px;
                    }
                    .text{
                        color: #333333;
                        @extend %style-one;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        img{
                            margin-right: 10px;
                        }
                    }
                    .rating{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        color: #333333;
                        span{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 14px;
                            color: #333333;
                        }
                    }
                    .price{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 24px;
                        color: #487FAD;
                        margin-bottom: 35px;
                    }
                    button,.link{
                        background: #326FEE;
                        width: 100%;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 22px;
                        color: #FFFFFF;
                        margin-bottom: 20px;
                    }
                    a{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 21px;
                        color: #1B213E;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 1rem;
                        img{
                            margin-right: .5rem;
                        }
                    }
                }
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .buy-course-card-mobile{
                display: none;
                @media (max-width: 768px) {
                    display: block;
                    position: initial;
                    width: 100%;
                    margin-bottom: 30px;
                }
                &__image{
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>