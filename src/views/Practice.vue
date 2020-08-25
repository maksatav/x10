<template>
    <div class="practice">
        <!-- <pre>{{course_section}}</pre> -->
        <div class="container-fluid" v-if="course_section">
            <div class="row">
                <div class="col-lg-3 p-0 border-right">
                    <div class="course-content">
                        <div class="head">
                            <h5 class="mb-0">Содержание курса</h5>
                        </div>
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" v-for="(course, index) in course_section.data" :key="index">
                            <a class="nav-link" 
                                v-for="(section, index2) in course.courseLabelList" 
                                :key="index2" 
                                :id="'v-pills-tab' + index2" 
                                data-toggle="pill" 
                                :href="'#v-pills' + index2" 
                                role="tab" 
                                aria-controls="v-pills-home" 
                                aria-selected="true"
                                :class="{'active' : index2 === tabs_index}"
                                @click="selectTab(index2, section)"
                            >
                                <h6 class="title">Секция {{index2 + 1}}: {{ section.name }} </h6>
                                <div class="time">
                                    <img src="../assets/image/icon/video.png" v-if="section.courseLabelTypeEnum === 'VIDEO'"> 
                                    <img src="../assets/image/icon/test.png" v-else>
                                    <span v-if="section.videoDuration">{{ section.videoDuration | msToTime }}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 p-0">
                    <div class="tab-content" id="v-pills-tabContent" v-for="(course, index) in course_section.data" :key="index">
                        <div class="tab-pane fade" 
                            v-for="(content, index2) in course.courseLabelList" 
                            :key="index2" 
                            :id="'v-pills' + index2" 
                            role="tabpanel" 
                            :aria-labelledby="'v-pills-tab' + index2"
                            :class="{'active' : index2 === tabs_index, 'show': index2 === tabs_index}"
                            v-show="index2 === tabs_index"
                        >
                            <div class="course-content-show">
                                <div class="course-content-show__top">
                                    <h1 class="recomen">{{ content.name }}</h1>
                                    <p class="text">{{ content.content }}</p>

                                    <div class="quiz" v-if="content.courseLabelTypeEnum === 'QUIZ' && quiz">
                                        <div v-if="!content.userCourseProgress || content.userCourseProgress.progress === 0">
                                            <!-- {{answer_quiz}} -->
                                            <div v-for="(question, index) in quiz.quizSlotList" :key="index" v-if="question">
                                                <div class="quiz-item" v-show="index === questionIndex">
                                                    <h6 class="question">{{ question.question.questionText }} </h6>
                                                    <div class="custom-control custom-radio mb-3" v-for="(answer, answer_index) in question.question.questionAnswerList" :key="answer_index">
                                                        <input type="radio" class="custom-control-input" :id="index + 'customRadio' + answer_index" :value="answer.fraction == 0 ? index + '0' + answer_index : answer.fraction" :name="index" v-model="answer_quiz[index]">
                                                        <label class="custom-control-label" :for="index + 'customRadio' + answer_index">{{ answer.answer }}</label>
                                                    </div>
                                                    <div class="quiz-buttons">
                                                        <button type="button" v-if="questionIndex > 0" @click="prevQuiz" class="btn">Предыдущий</button>
                                                        <button type="button" class="btn" v-if="quiz.quizSlotList.length > questionIndex + 1" @click="nextQuiz">Следующий</button>
                                                        <button type="button" class="btn" @click="countQuiz(quiz.id)" v-else>Отправить</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="question-index" v-show="!(questionIndex === quiz.quizSlotList.length)" >{{ questionIndex + 1 }}/{{quiz.quizSlotList.length}}</span>
                                        </div>
                                        <div class="result-quiz" v-else>
                                            <div class="pass" v-if="content.userCourseProgress.progress >= quiz.checkpointPercent">
                                                <img src="../assets/image/icon/pass.png">
                                                <h6 class="prowly">Вы прошли тест</h6>
                                                <p class="percent">{{content.userCourseProgress.progress * 100}}%</p>
                                            </div>
                                            <div class="not-pass" v-else>
                                                <img src="../assets/image/icon/not-pass.png">
                                                <h6 class="prowly">Вы не прошли тест</h6>
                                                <p class="percent">{{content.userCourseProgress.progress * 100}}%</p>
                                                <p class="neobhodimo">Для прохождения<br>
                                                    необходимо не менее {{content.userCourseProgress.progress * 100}}%
                                                </p>
                                                <button type="button" class="btn peresdat" @click="retakeTest(content.id)">Пересдать</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-else-if="content.courseLabelTypeEnum === 'ARTICLE'"></div>
                                    
                                    <div v-else-if="content.courseLabelTypeEnum === 'VIDEO'">
                                        <video width="100%" height="100%" @playing="play(content.id)" @pause="pause(content.id)" controls disablepictureinpicture controlslist="nodownload">
                                            <source :src="content.videoUrl" type="video/mp4">
                                        </video>
                                    </div>

                                    <div v-else-if="content.courseLabelTypeEnum === 'RESOURCE'">
                                        <button type="button" class="btn download" @click="downloadFile(content)">Скачать</button>
                                    </div>

                                </div>
                                <div class="course-content-show__bottom">
                                    <div class="input-group group-end">
                                        <a class="btn btn-danger btnPrevious ml-auto mr-3" v-if="index2 > 0" @click="btnPrevious(content.id)">Предыдущий</a>
                                        <a class="btn btn-success btnNext" v-if="course.courseLabelList.length > index2 + 1" @click="btnNext(content.id)">Следующий</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import axios from 'axios'

export default {
    name: 'practice',
    data() {
        return {
            questionIndex: 0,
            answer_quiz: Array(),
            tabs_index: 0,
            all_answer_quiz: null,
            right_answer_quiz: [],
            total: null,
            section_id: [],
            countDown: 0,
            duration: null,
            every_second: null,
            current_second: null,
            current_video_id: null
        }
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
        course_section() {
            return this.$store.getters.COURSE_SECTION()
        },
        quiz() {
            return this.$store.getters.QUIZ()
        }
    },
    mounted() {
        this.$store.dispatch('GET_COURSE_SECTION', this.$route.params.id)
        .then(response => {
            for (let i = 0; i < this.course_section.data.length; i++) {
                for (let j = 0; j < this.course_section.data[i].courseLabelList.length; j++) {
                    this.section_id.push(
                        {
                            'id': this.course_section.data[i].courseLabelList[j].id,
                            'status': this.course_section.data[i].courseLabelList[j].courseLabelTypeEnum
                        }
                    )
                }
            }
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        nextQuiz: function() {
            this.questionIndex++;
        },
        prevQuiz: function() {
            this.questionIndex--;
        },
        selectTab(index, course){
            this.tabs_index = index
            if(course.courseLabelTypeEnum === 'QUIZ') {
                this.$store.dispatch('GET_QUIZ', course.id)
                // this.questionIndex = 0
            } else if(course.courseLabelTypeEnum === 'ARTICLE') {
                const data = {
                    user: {
                        id: localStorage.getItem('id')
                    },
                    courseLabel: {
                        id: course.id
                    },
                    progress: 1
                }
                this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
            }
        },
        btnNext(id) {
            $('.nav-pills .active').next().trigger('click');
            this.tabs_index++
            
            let current_index_section_id
            for (let i = 0; i < this.section_id.length; i++) {
                if(id === this.section_id[i].id){
                    current_index_section_id = this.section_id.indexOf(this.section_id[i]);
                }
            }
            current_index_section_id = current_index_section_id + 1
            let add_one_current_index_section_id = this.section_id[current_index_section_id]
            
            if (add_one_current_index_section_id.status === 'QUIZ') {
                this.$store.dispatch('GET_QUIZ', add_one_current_index_section_id.id)
            } else if(add_one_current_index_section_id.status === 'ARTICLE'){
                const data = {
                    user: {
                        id: localStorage.getItem('id')
                    },
                    courseLabel: {
                        id: add_one_current_index_section_id.id
                    },
                    progress: 1
                }
                this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
            }
        },
        btnPrevious(id) {
            $('.nav-pills .active').prev().trigger('click');
            this.tabs_index--
            let current_index_section_id
            for (let i = 0; i < this.section_id.length; i++) {
                if(id === this.section_id[i].id){
                    current_index_section_id = this.section_id.indexOf(this.section_id[i]);
                }
            }
            current_index_section_id = current_index_section_id - 1
            let add_one_current_index_section_id = this.section_id[current_index_section_id]
            
            if (add_one_current_index_section_id.status === 'QUIZ') {
                this.$store.dispatch('GET_QUIZ', add_one_current_index_section_id.id)
            } else if(add_one_current_index_section_id.status === 'ARTICLE'){
                const data = {
                    user: {
                        id: localStorage.getItem('id')
                    },
                    courseLabel: {
                        id: add_one_current_index_section_id.id
                    },
                    progress: 1
                }
                this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
            }
        },
        countQuiz(id) {
            this.all_answer_quiz = this.answer_quiz.length
            for (let i = 0; i < this.answer_quiz.length; i++) {
                if(this.answer_quiz[i] == '1') {
                    this.right_answer_quiz.push(this.answer_quiz[i])
                }
            }
            this.total = this.right_answer_quiz.length / this.all_answer_quiz
            
            const data = {
                user: {
                    id: localStorage.getItem('id')
                },
                courseLabel: {
                    id: id
                },
                progress: this.total
            }
            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
            .then(response => {
                this.$store.dispatch('GET_COURSE_SECTION', this.$route.params.id)
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        },
        downloadFile(content) {
            const data = {
                user: {
                    id: localStorage.getItem('id')
                },
                courseLabel: {
                    id: content.id
                },
                progress: 1
            }
            axios({
                url: content.fileUrl,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');

                    fileLink.href = fileURL;
                    if(response.data.type === 'image/png') {
                        fileLink.setAttribute('download', 'image.png');
                    } else if(response.data.type === 'application/pdf') {
                        fileLink.setAttribute('download', 'file.pdf');
                    } else {
                        fileLink.setAttribute('download', 'file.docx');
                    }
                    document.body.appendChild(fileLink);

                    fileLink.click();
                    
                    this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                    .then(response => {
                        console.log(response)
                    }).catch(err => {
                        console.log(err)
                    })

            });
        },
        play(id) {
            this.duration = Math.floor(event.currentTarget.duration)
            this.current_second = Math.floor(event.currentTarget.currentTime)
            this.every_second = Math.floor(this.duration / 10)
            this.current_video_id = id
            this.countUpTimer()
            console.log(this.every_second)
            console.log(this.current_second)
            console.log(this.duration)
        },
        pause() {
            this.duration = 0
        },
        countUpTimer() {
            if(this.current_second === 0 ) {
        
                if(this.countDown < this.duration) {
                    setTimeout(() => {
                        this.countDown += 1
                        this.countUpTimer()
                        if(this.countDown === this.every_second) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.1
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 2) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.2
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 3) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.3
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 4) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.4
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 5) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.5
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 6) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.6
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 7) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.7
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 8) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.8
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 9) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.9
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.countDown === this.every_second * 10) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 1
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        }
                    }, 1000)
                }
            
            } else {
                if(this.current_second < this.duration) {
                    setTimeout(() => {
                        this.current_second += 1
                        this.countUpTimer()
                        if(this.current_second === this.every_second) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.1
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 2) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.2
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 3) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.3
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 4) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.4
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 5) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.5
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 6) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.6
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 7) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.7
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 8) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.8
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 9) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 0.9
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        } else if (this.current_second === this.every_second * 10) {
                            const data = {
                                user: {
                                    id: localStorage.getItem('id')
                                },
                                courseLabel: {
                                    id: this.current_video_id
                                },
                                progress: 1
                            }
                            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
                        }
                    }, 1000)
                }
            }
        },
        retakeTest(id) {
            const data = {
                user: {
                    id: localStorage.getItem('id')
                },
                courseLabel: {
                    id: id
                },
                progress: 0
            }
            this.$store.dispatch('GET_USER_COURSES_PROGRESS', data)
            .then(response => {
                this.$store.dispatch('GET_COURSE_SECTION', this.$route.params.id)
                this.answer_quiz = Array()
                this.right_answer_quiz = []
                this.questionIndex = 0
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .practice{
        .row{
            margin-right: -15px;
            margin-left: -15px;
            @media (max-width: 768px) {
                flex-wrap: wrap-reverse;
            }
        }
        .course-content{
            background: #ffffff;
            // border-right: 1px solid #EAEAEA;
            .head{
                padding: 12px 40px;
                border-bottom: 1px solid #EAEAEA;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                color: #333333;
                @media (max-width: 768px) {
                    padding: 1rem;
                }
            }
            .nav{
                .nav-link{
                    padding: 16px 40px;
                    background: #F7F8FA;
                    border-bottom: 1px solid #EAEAEA;
                    border-radius: 0;
                    .title{
                        @extend %style-one;
                        color: #333333;
                    }
                    .time{
                        display: flex;
                        align-items: center;
                        span{
                            color: #939393;
                            @extend %style-one;
                            margin-left: 12px;
                        }
                    }
                }
            }
            .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
                background: rgba(137, 241, 255, 0.3);
            }
        }
        .course-content-show{
            &__top{
                background: #F3F3F3;
                padding: 60px 115px 60px 115px;
                @media (max-width: 768px) {
                    padding: 20px;
                }
                .recomen{
                    margin-bottom: 2rem;
                    font-size: 24px;
                }
                .text{
                    font-size: 16px;
                    line-height: 19px;
                    margin-bottom: 3rem;
                }
                .quiz{
                    padding: 65px 0;
                    position: relative;
                    @media (max-width: 768px) {
                        padding: 20px 0;
                    }
                    .question{
                        font-style: normal;
                        font-weight: normal;
                        font-size: 20px;
                        line-height: 24px;
                        color: #333333;
                        margin-bottom: 30px;
                    }
                    .custom-control{
                        background: #fff;
                        width: 450px;
                        padding: 16px 30px;
                        border-radius: 5px;
                        @media (max-width: 768px) {
                            width: 100%;
                        }
                        label{
                            color: #333333;
                            @extend %style-one;
                            color: #333333;
                            margin-left: 1.5rem;
                        }
                    }
                    .custom-radio .custom-control-label::before{
                        top: 2px;
                    }
                    .custom-control-input:checked~.custom-control-label::before{
                        border-color: #03B3E4 !important;
                        background-color: #03B3E4 !important;
                    }
                    .custom-radio .custom-control-input:checked~.custom-control-label::after{
                        background-image: none;
                    }
                    .quiz-item{
                        @media (max-width: 768px) {
                            margin-top: 3rem;
                        }
                    }
                }
                .question-index{
                    position: absolute;
                    top: 10px;
                    left: 0;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 26px;
                    line-height: 32px;
                    color: #00637B;
                }
                .quiz-buttons{
                    width: 450px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 24px;
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                    button{
                        background: #326FEE;
                        color: #ffffff;
                        @extend %style-two;
                        padding: 8px 30px;
                        @media (max-width: 375px) {
                            padding: 8px 20px;
                        }
                        @media (max-width: 320px) {
                            padding: 8px 10px;
                        }
                    }
                }
                .result-quiz{
                    > div{
                        width: 250px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .not-pass,.pass{
                        img{
                            margin-bottom: 50px;
                        }
                        .prowly{
                            font-style: normal;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 22px;
                            margin-bottom: 6px;
                            color: #1B213E;
                        }
                        .percent{
                            font-style: normal;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 22px;
                            color: #326FEE;
                            margin-bottom: 6px;
                        }
                        .neobhodimo{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 22px;
                            color: #727272;
                            margin-bottom: 10px;
                        }
                        .peresdat{
                            background: #326FEE;
                            padding: 10px 40px;
                            color: #FFFFFF;
                            @extend %style-two;
                        }
                    }
                }
                video{
                    outline: none;
                }
                .download{
                    background: #326FEE;
                    color: #fff;
                }
            }
            &__bottom{
                background: #ffffff;
                padding: 40px 60px;
                @media (max-width: 768px) {
                    display: none;
                }
                .btnNext,.btnPrevious{
                    color: #076D7B;
                    @extend %style-two;
                    padding: 10px 30px;
                    background: #ffffff;
                    border: 1px solid #E5E5E5;
                }
            }
        }
    }
</style>