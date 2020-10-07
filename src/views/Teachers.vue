<template>
    <div class="teachers">
        <div class="teachers__top">
            <h1>Учителя</h1>
        </div>
        <div class="teachers-container" v-if="teachers">
            <div class="row">
                <div class="col-lg-3 p-2" v-for="(teacher, index) in teachers.data" :key="index">
                    <router-link :to="{ name: 'Teacher', params: {id: teacher.id }}" class="teacher text-center">
                        <img :src="teacher.imageUrl" class="image">
                        <div>
                            <h5 class="name">{{ teacher.name }}</h5>
                            <star-rating 
                                :rating="4" 
                                active-color="#FFCB4C" 
                                :read-only="true" 
                                :max-rating="5" 
                                :increment="0.5"
                                :star-size="17"
                                :show-rating="false"
                            >
                            </star-rating>
                            <p class="mb-0 rating">4,3 (4к)</p>
                            <hr>
                            <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                                <p class="mb-0 kurs">Курсов</p>
                                <p class="mb-0 number">{{ teacher.totalCourses ? teacher.totalCourses : 0 }}</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between w-100">
                                <p class="mb-0 student">Студентов</p>
                                <p class="mb-0 number">{{ teacher.totalStudents ? teacher.totalStudents : 0 }}</p>
                            </div>
                            <img src="../assets/image/icon/arrow-right.png" class="arrow-right">
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'teachers',
    computed: {
        teachers (){
            return this.$store.getters.TEACHERS()
        }
    },
    mounted() {
        this.$store.dispatch('GET_TEACHERS')
        window.scrollTo(0,0)
    },
    methods: {
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
    .teachers{
        background: #f8f8f8;
        &__top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 13px 1rem;
            }
            h1{
                width: 850px;
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
        .teachers-container{
            width: 850px;
            margin: 0 auto;
            padding: 40px 0;
            @media (max-width: 768px) {
                width: 100%;
                padding: 40px 1rem;
            }
            .teacher{
                padding: 20px 16px;
                background: #ffffff;
                border-radius: 5px;
                display: block;
                text-decoration: none;
                height: 100%;
                @media (max-width: 768px) {
                    display: flex;
                    align-items: center;
                }
                >div{
                    @media (max-width: 768px) {
                        width: 65%;
                        text-align: left;
                        margin-left: 1rem;
                    }
                }
                .image{
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin-bottom: 1rem;
                }
                .name{
                    @extend %style-two;
                    color: #333;
                    letter-spacing: -0.3px;
                    margin-bottom: 0;
                }
                .vue-star-rating{
                    justify-content: center;
                    @media (max-width: 768px) {
                        justify-content: left;
                    }
                }
                .rating{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    color: #E0E0E0;
                    margin-top: 4px;
                }
                hr{
                    margin: 10px 0;
                }
                .kurs,.student{
                    color: rgba(0, 0, 0, 0.5);
                    @extend %style-one;
                }
                .number{
                    color: #333333;
                    @extend %style-two;
                }
                .arrow-right{
                    display: none;
                    @media (max-width: 768px) {
                        display: block;
                        position: absolute;
                        top: 50%;
                        right: 1rem;
                        transform: translateY(-50%);
                    }
                }
            }
        }
    }
</style>