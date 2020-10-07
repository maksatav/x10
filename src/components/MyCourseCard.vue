<template>
    <div v-if="courses">
        <router-link :to="$route.name == 'Graduate' ? { name: 'Course', params: {id: item.id }} :{ name: 'Practice', params: {id: item.id }}" class="my-course-card" v-for="(item, index) in courses.data" :key="index">
            <img :src="item.imageUrl">
            <div class="description">
                <h1>{{ item.title }}</h1>
                <p>{{ item.mentor.name }}</p>
                <div class="d-flex align-items-center">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="'width:' + item.progress * 100 + '%'"></div>
                    </div>
                    <p class="mb-0 ml-3">{{ item.progress * 100 }}%</p>
                </div>
                <div class="rating">
                    <p class="mb-0 mr-3">Ваш рейтинг</p>
                    <star-rating 
                        :rating="setRating(String(item.rating))" 
                        active-color="#FFCB4C" 
                        :read-only="true" 
                        :max-rating="5" 
                        :increment="0.5"
                        :star-size="17"
                        :show-rating="false"
                    >
                    </star-rating>
                    <span class="ml-2">{{ item.rating }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'my-course-card',
    props: ['courses'],
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
    .my-course-card{
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        text-decoration: none;
        @media (max-width: 425px) {
            background: #ffffff;
            padding: 10px;
        }
        img{
            width: 160px;
            height: 160px;
            object-fit: cover;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            @media (max-width: 425px) {
                width: 100px;
                height: 100px;
                margin-right: 10px;
                margin-bottom: auto;
                border-radius: 5px;
            }
        }
        .description{
            padding: 22px 16px;
            background: #ffffff;
            width: 100%;
            height: 160px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;
            @media (max-width: 425px) {
                padding: 0;
                height: initial;
            }
            h1{
                letter-spacing: -0.3px;
                color: #333333;
                @extend %style-two;
                margin-bottom: 12px;
            }
            p{
                letter-spacing: -0.3px;
                color: #E0E0E0;
                @extend %style-two;
                margin-bottom: 34px;
                @media (max-width: 425px) {
                    margin-bottom: 20px;
                }
            }
            .progress{
                width: 100%;
                border-radius: 50px;
                height: 10px;
                @media (max-width: 425px) {
                    height: 6px;
                }
                .progress-bar{
                    border-radius: 50px;
                    background: #27AE60;
                }
            }
            .rating{
                position: absolute;
                right: 18px;
                bottom: 5px;
                display: flex;
                align-items: center;
                @media (max-width: 768px) {
                    display: none;
                }
                p{
                    @extend %style-one;
                    letter-spacing: -0.3px;
                    color: rgba(51, 51, 51, 0.6);
                }
                span{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    color: #333333;
                }
                .vue-star-rating{
                    transform: translateY(-2px);
                }
            }
        }
    }
</style>