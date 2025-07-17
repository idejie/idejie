<template>
  <div class="projects-container">
    <h1 class="page-title">Projects</h1>
    <a-space direction="vertical" size="large" style="width: 100%">
      <a-card v-for="proj in projects" 
              :key="proj.id" 
              class="project-card"
              :bordered="false">
        <a-row :gutter="[24, 16]" align="middle">
          <a-col :xs="24" :sm="8" :md="6">
            <img :alt="proj.title" :src="proj.image" class="project-image"/>
          </a-col>
          <a-col :xs="24" :sm="16" :md="18">
            <div class="project-content">
              <h2 class="project-title">{{ proj.title }}</h2>
              
              <div class="project-authors">
                <UserOutlined />
                <span v-for="(author, index) in proj.authors" :key="author" 
                      :class="{ 'highlight-author': author.includes('Dejie Yang') }">
                  {{ author }}{{ index < proj.authors.length - 1 ? ', ' : '' }}
                </span>
              </div>

              <div class="project-venue">
                <CalendarOutlined /> {{ proj.year }}
                <BookOutlined style="margin-left: 16px"/> {{ proj.venue }}
              </div>

              <p class="project-description" v-html="proj.description"></p>

              <div class="project-actions">
                <a-space>
                  <a-button v-if="proj.link" type="link" :href="proj.link" target="_blank">
                    <template #icon><LinkOutlined /></template>
                    Challenge
                  </a-button>
                  <a-button v-if="proj.report" type="link" :href="proj.report" target="_blank">
                    <template #icon><FilePdfOutlined /></template>
                    Report
                  </a-button>
                </a-space>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-space>
  </div>
</template>

<script setup>
import { 
  UserOutlined, 
  CalendarOutlined, 
  BookOutlined,
  FilePdfOutlined, 
  LinkOutlined
} from '@ant-design/icons-vue'

const projects = [
  {
    id: 1,
    title: 'IntentVC: Intention-Oriented Controllable Video Captioning',
    year: 2025,
    authors: ['flyfish(minghang zheng)', 'dejie(yang)'],
    venue: '33rd ACM International Conference on Multimedia (ACM MM)',
    description: '<strong>Ranked 4th(flyfish) and 5th(dejie)</strong> in the challenge.',
    image: new URL('../assets/paper/intentvc.png', import.meta.url).href, // Placeholder, please update
    link: 'https://sites.google.com/view/intentvc/home?authuser=0' // Placeholder, please update with the correct challenge link
  },
  {
    id: 2,
    title: 'Track: Situated QA (SQA) at 5th 3D Scene Understanding for Vision, Graphics, and Robotics',
    // authors: ['Dejie Yang', 'Minhang Zheng','Zhu Xu', 'Ting Lei','Wentao Mo','Yang Liu'],
    year: 2025,
    venue: 'CVPR 2025 Workshop',
    description: '<strong>Ranked 1st place</strong> in the challenge.',
    image: new URL('../assets/paper/sqa.png', import.meta.url).href,
    link: 'https://scene-understanding.com/challenge.html'
  },
  {
    id: 3,
    title: 'Team PKU-WICT-MIPL Ego4D Look At Me Challenge 2023',
    authors: ['Xiyu Wei', 'Dejie Yang', 'Yuxin Peng', 'Yang Liu'],
    year: 2023,
    venue: 'Ego4D Looking At Me Challenge at CVPR 2023 (CCF-A)',
    description: '<strong>Ranked 1st place</strong> in the challenge.',
    image: new URL('../assets/paper/gaze2023.png', import.meta.url).href,
    link: 'https://ego4d-data.org/workshops/cvpr23/'
  },
  {
    id: 4,
    title: 'Team PKU-WICT-MIPL Ego4D Look At Me Challenge 2022',
    authors: ['Xiyu Wei', 'Dejie Yang', 'Minghang Zheng', 'Qingchao Chen', 'Yuxin Peng', 'Yang Liu'],
    year: 2022,
    venue: 'Ego4D Workshop at European Conference on Computer Vision (ECCV, CCF-B)',
    description: '<strong>Ranked 1st place</strong> in the challenge.',
    image: new URL('../assets/paper/gaze2022.png', import.meta.url).href,
    link: 'https://ego4d-data.org/workshops/eccv22/'
  },
  {
    id: 5,
    title: 'Team PKU-WICT-MIPL PIC Makeup Temporal Video Grounding Challenge 2022',
    authors: ['Minghang Zheng', 'Dejie Yang', 'Zhongjie Ye', 'Ting Lei', 'Yuxin Peng', 'Yang Liu'],
    year: 2022,
    venue: 'PIC Makeup Temporal Video Grounding (MTVG) Challenge in ACM-MM 2022 (CCF-A)',
    description: '<strong>Ranked 2nd place</strong> in the challenge.',
    image: new URL('../assets/paper/makeup.png', import.meta.url).href,
    link: 'https://arxiv.org/abs/2207.02687'
  },
  {
    id: 6,
    title: 'PKU-WICT at TRECVID 2021: Instance Search Task',
    authors: ['Yuxin Peng', 'Zhaoda Ye', 'Junchao Zhang', 'Hongbo Sun', 'Dejie Yang', 'Zhenyu Cui'],
    year: 2021,
    venue: 'Text REtrieval Conference (TRECVID)',
    description: '',
    image: new URL('../assets/paper/TREC2021.png', import.meta.url).href,
    link: 'https://www-nlpir.nist.gov/projects/tvpubs/tv21.papers/pku_wict.pdf'
  },
  {
    id: 7,
    title: 'Team IIE-MRG: EPIC-KITCHENS-100 2021 Multi-Instance Retrieval Challenge',
    authors: ['Xiaoshuai Hao', 'Wanqian Zhang', 'Dejie Yang', 'Shu Zhao', 'Dayan Wu', 'Bo Li', 'Weiping Wang'],
    year: 2021,
    venue: 'Workshop on EPIC-Kitchens Challenges in conjunction with CVPR 2021 (CCF-A)',
    description: '<strong>Ranked 1st place</strong> in the Multi-Instance Retrieval Track.',
    image: new URL('../assets/paper/epic.png', import.meta.url).href,
    link: 'https://epic-kitchens.github.io/2021'
  }
]
</script>

<style scoped>
.projects-container {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  color: rgba(0, 0, 0, 0.85);
}

.project-card {
  background: #fff;
  border-radius: 8px;
  transition: all 0.3s;
  margin-bottom: 16px;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}

.project-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.4;
}

.project-authors {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
}

.project-authors .anticon {
  margin-right: 8px;
}

.highlight-author {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

.project-venue {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 16px;
}

.project-venue .anticon {
  margin-right: 8px;
}

.project-description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 16px;
}

.project-actions {
  margin-top: auto;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 16px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .project-title {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .project-image {
    margin-bottom: 16px;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 16px;
  }
}
</style> 