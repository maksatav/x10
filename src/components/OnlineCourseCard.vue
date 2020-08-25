<template>
    <div v-if="courses" class="row">
        <div class="col-lg-4 px-2" v-for="(course, index) in courses.data" :key="index">
            <router-link :to="{ name: 'Course', params: {id: course.id }}" class="course-card">
                <div class="course-image">
                    <img :src="course.imageUrl">
                    <div class="bestseller" v-if="false">
                        <img src="../assets/image/icon/bestseller.png">
                        <span class="hit">Хит продаж</span>
                    </div>
                </div>
                <div class="course-description">
                    <h6 class="title">{{ course.title.substring(0,20) }}...</h6>
                    <p class="name">{{ course.mentor.name }}</p>
                    <div class="d-flex align-items-center review">
                        <star-rating 
                            :rating="course.rating" 
                            active-color="#FFCB4C" 
                            :read-only="true" 
                            :max-rating="5" 
                            :star-size="17"
                            :increment="0.5"
                            :show-rating="false"
                        >
                        </star-rating>
                        <span class="ml-2">{{course.rating}} ({{course.studentCount}})</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn status online">Онлайн</button>
                        <span class="price">{{ course.price }}тг</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'course-card',
    props: ['courses'],
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .course-card{
        display: flex;
        align-items: center;
        box-shadow: 0px 10px 40px rgba(138, 149, 158, 0.2);
        border-radius: 5px;
        background: #ffffff;
        text-decoration: none;
        @media (max-width: 768px) {
            width: 360px;
        }
        .course-image{
            img{
                width: 160px;
                height: 160px;
                object-fit: cover;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            .bestseller{
                position: absolute;
                top: 2rem;
                img{
                    width: 97px !important;
                    height: 25px !important;
                }
                .hit{
                    position: absolute;
                    width: 100%;
                    left: -7px;
                    top: 4px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    text-align: center;
                    letter-spacing: -0.3px;
                    color: #FFFFFF;
                }
            }
        }
        .course-description{
            padding: 0 15px;
            width: 100%;
            .title{
                letter-spacing: -0.3px;
                color: #333333;
                margin-bottom: 13px;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 20px;
                
            }
            .name{
                @extend %style-one;
                margin-bottom: 10px;
                color: #C4C4C4;
            }
            .review{
                margin-bottom: 14px;
                span{
                    color: #E2E2E2;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    transform: translateY(4px);
                }
            }
            .status{
                padding: 3px 7px;
                letter-spacing: -0.3px;
                @extend %style-one;
            }
            .price{
                color: #F28580;
                @extend %style-one;
            }
            .online{
                border: 1px solid #27AE60;
                color: #27AE60;
            }
        }
    }
</style>