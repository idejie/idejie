<template>
  <div class="home">
    <a-space direction="vertical" :size="24" style="width: 100%">
      <!-- Profile Section -->
      <a-card class="profile-card">
        <div class="profile-header">
          <img src="../assets/dejie.jpeg" alt="profile" class="profile-image"/>
          <div class="profile-info">
            <h1 class="name">Dejie Yang (idejie)</h1>
            <p class="chinese-name">杨德杰</p>
            <p class="title">PhD Student</p>
            <p class="institution">
              <BankOutlined /> Peking University
            </p>
            <div class="contact-info">
              <a href="mailto:ydejie@gmail.com" class="contact-link">
                <GoogleOutlined /> <span>ydejie@gmail.com</span>
              </a>
              <a href="mailto:ydj@stu.pku.edu.cn" class="contact-link">
                <MailOutlined /> <span>ydj@stu.pku.edu.cn</span>
              </a>
            </div>
            <div class="social-links">
              <a href="https://github.com/idejie" target="_blank" class="social-link">
                <GithubOutlined /> <span>idejie</span>
              </a>
              <a href="https://scholar.google.com/citations?user=P-_TyKsAAAAJ" target="_blank" class="social-link">
                <img src="../assets/google-scholar.ico" alt="Google Scholar" class="scholar-icon"/> <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </a-card>

      <!-- About Me Section -->
      <a-card class="content-card" title="About Me">
        <div class="intro-text">
          <p>
            I am a fourth-year Ph.D. student at Peking University, advised by <a href="https://www.csyangliu.com/" target="_blank" class="advisor-link">Prof. Yang Liu</a>. 
          </p>
          <p>
            Previously, I received M.Sc. degree from University of Chinese Academy of Sciences, advised by <a href="https://people.ucas.ac.cn/~iieLibo" target="_blank" class="advisor-link">Prof. Bo Li</a>, and B.E. degree from Shandong University, advised by <a href="https://www.linkedin.com/in/yafang-wang-962b3535/" target="_blank" class="advisor-link">Prof. Yafang Wang</a>.
          </p>
          <p>My research interests include Large Models and Multi-Modal learning.</p>
        </div>
      </a-card>

      <!-- Publications Section -->
      <a-card class="content-card">
        <template #title>
          <div class="card-header">
            <span>Publications</span>
            <router-link to="/publications" class="view-details">
              View Details <RightOutlined />
            </router-link>
          </div>
        </template>
        <a-timeline>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">AR-VRM: Imitating Human Motions for Visual Robot Manipulation with Analogical Reasoning</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Zijing Zhao, Yang Liu</div>
              <div class="publication-venue">International Conference on Computer Vision (ICCV), 2025</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">Hierarchical Sub-action Tree for Continuous Sign Language Recognition</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Zhu Xu, Xinjie Gao, Yang Liu</div>
              <div class="publication-venue">International Conference on Multimedia and Expo (ICME), 2025</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">PlanLLM: Video procedure planning with refinable large language models</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Zijing Zhao, Yang Liu</div>
              <div class="publication-venue">AAAI Conference on Artificial Intelligence (AAAI), 2025</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">3D Vision and Language Pretraining with Large-scale Synthetic Data</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Zhu Xu, Wentao Mo, Qingchao Chen, Siyuan Huang, Yang Liu</div>
              <div class="publication-venue">International Joint Conference on Artificial Intelligence (IJCAI), 2024</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">Active Object Detection with Knowledge Aggregation and Distillation from Large Models</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Yang Liu</div>
              <div class="publication-venue">IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">Recent Advances in Class-incremental Learning</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Minghang Zheng, Weishuai Wang, Sizhe Li, Yang Liu</div>
              <div class="publication-venue">International Conference on Image and Graphics (ICIG), 2023</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <FilePdfOutlined style="font-size: 16px" />
            </template>
            <div class="publication-item">
              <div class="publication-title">Deep Semantic-alignment Hashing for Unsupervised Cross-modal Retrieval</div>
              <div class="publication-authors"><strong>Dejie Yang</strong>, Dayan Wu, Wanqian Zhang, Haisu Zhang, Bo Li, Weiping Wang</div>
              <div class="publication-venue">International Conference on Multimedia Retrieval (ICMR), 2020</div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- Projects Section -->
      <a-card class="content-card">
        <template #title>
          <div class="card-header">
            <span>Projects</span>
            <router-link to="/projects" class="view-details">
              View More <RightOutlined />
            </router-link>
          </div>
        </template>
        <a-timeline>
          <a-timeline-item>
            <template #dot>
              <ProjectOutlined style="font-size: 16px" />
            </template>
            <div class="project-item">
              <div class="project-title">Track: Situated QA (SQA) at 5th 3D Scene Understanding for Vision, Graphics, and Robotics</div>
              <div class="project-description" v-html="'<strong>Ranked 1st place</strong> in the challenge.'"></div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <ProjectOutlined style="font-size: 16px" />
            </template>
            <div class="project-item">
              <div class="project-title">Team PKU-WICT-MIPL Ego4D Look At Me Challenge 2023</div>
              <div class="project-description" v-html="'<strong>Ranked 1st place</strong> in the challenge.'"></div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <ProjectOutlined style="font-size: 16px" />
            </template>
            <div class="project-item">
              <div class="project-title">Team PKU-WICT-MIPL Ego4D Look At Me Challenge 2022</div>
              <div class="project-description" v-html="'<strong>Ranked 1st place</strong> in the challenge.'"></div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <ProjectOutlined style="font-size: 16px" />
            </template>
            <div class="project-item">
              <div class="project-title">Team IIE-MRG: EPIC-KITCHENS-100 2021 Multi-Instance Retrieval Challenge</div>
              <div class="project-description" v-html="'<strong>Ranked 1st place</strong> in the challenge.'"></div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>
      
      <!-- Awards Section -->
      <a-card class="content-card">
        <template #title>
          <div class="card-header">
            <span>Awards</span>
            <router-link to="/more" class="view-details">
              View More <RightOutlined />
            </router-link>
          </div>
        </template>
        <a-timeline>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Student Award, Peking University</div>
              <div class="award-date">October 2024</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Taihang Excellence Scholarship, Peking University</div>
              <div class="award-date">October 2024</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Research Award, Peking University</div>
              <div class="award-date">December 2023</div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- Experience Section -->
      <a-card class="content-card">
        <template #title>
          <div class="card-header">
            <span>Experience</span>
            <router-link to="/more#experience" class="view-details">
              View More <RightOutlined />
            </router-link>
          </div>
        </template>
        <a-timeline>
          <a-timeline-item v-for="experience in experiences" :key="experience.id">
            <template #dot>
              <component :is="experience.icon" style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-info">
                <h4>{{ experience.title }}</h4>
                <p class="experience-period">{{ experience.period }}</p>
                <div v-if="experience.type === 'work'" class="experience-company">
                  <a v-if="experience.organizationLink" :href="experience.organizationLink" target="_blank" class="company-link">{{ experience.organization }}</a>
                  <span v-else>{{ experience.organization }}</span>
                </div>
                <ul v-if="experience.details && experience.details.length > 0" class="experience-details">
                  <li v-for="(detail, index) in experience.details" :key="index">{{ detail }}</li>
                </ul>
              </div>
              <div class="company-logo-container" v-if="experience.logo">
                <img :src="experience.logo" alt="Company Logo" class="company-logo" :class="{'spirit-ai-logo': experience.organization === 'Spirit AI'}" />
              </div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- Education Section -->
      <a-card class="content-card" title="Education">
        <a-timeline>
          <a-timeline-item>
            <template #dot>
              <ClockCircleOutlined style="font-size: 16px" />
            </template>
            <div class="experience-item">
              <h4>PhD Student</h4>
              <p class="experience-period">2021 - Present</p>
                              <div class="experience-description">
                  <div class="university-info">
                    <div class="university-name">Peking University</div>
                    <div class="school-name">Wangxuan Institute of Computer Technology</div>
                  </div>
                  <div class="university-logo">
                    <img src="../assets/pku.png" alt="PKU" class="university-icon"/>
                  </div>
                </div>
              </div>
            </a-timeline-item>
            <a-timeline-item>
            <template #dot>
              <BankOutlined style="font-size: 16px" />
            </template>
              <div class="experience-item">
                <h4>Master's Degree</h4>
                <p class="experience-period">2018 - 2021  </p>
                <div class="experience-description">
                  <div class="university-info">
                    <div class="university-name">University of Chinese Academy of Sciences</div>
                    <div class="school-name">Institute of Information Engineering & School of Cyber Security</div>
                  </div>
                  <div class="university-logo">
                    <img src="../assets/ucas.png" alt="UCAS" class="university-icon"/>
                  </div>
                </div>
              </div>
            </a-timeline-item>
            <a-timeline-item>
            <template #dot>
              <BankOutlined style="font-size: 16px" />
            </template>
              <div class="experience-item">
                <h4>Bachelor's Degree</h4>
                <p class="experience-period">2014 - 2018</p>
                <div class="experience-description">
                  <div class="university-info">
                    <div class="university-name">Shandong University</div>
                    <div class="school-name">School of Software</div>
                  </div>
                  <div class="university-logo">
                    <img src="../assets/sdu.png" alt="SDU" class="university-icon"/>
                  </div>
                </div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>
    </a-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  BankOutlined,
  GoogleOutlined,
  MailOutlined,
  GithubOutlined,
  RightOutlined,
  FilePdfOutlined,
  ProjectOutlined,
  TrophyOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  BookOutlined,
} from '@ant-design/icons-vue';
import spiritAILogo from '../assets/logo/spirit-ai.svg';
import zhipuAILogo from '../assets/logo/zhipu-ai.png';
import tencentLogo from '../assets/logo/tencent.jpeg';
import huaweiLogo from '../assets/logo/Huawei Logo.png';
import antLogo from '../assets/logo/ant.png';

const experiences = [
  // {
  //   id: 1,
  //   type: 'work',
  //   title: 'VLA Algorithm Intern',
  //   period: 'May 2025 - Present',
  //   organization: 'Spirit AI',
  //   organizationLink: 'https://spirit-ai.com/',
  //   logo: spiritAILogo,
  //   icon: ClockCircleOutlined
  // },
  {
    id: 2,
    type: 'work',
    title: 'Multi-modal Algorithm Intern',
    period: 'October 2024 - May 2025',
    organization: 'Zhipu AI',
    organizationLink: 'https://www.zhipuai.cn/',
    logo: zhipuAILogo,
    icon: GlobalOutlined
  },
  {
    id: 4,
    type: 'work',
    title: 'Intelligent Customer Service Algorithm Intern',
    period: 'March 2019 - July 2019',
    organization: 'Ant Group',
    organizationLink: 'https://www.antgroup.com/',
    logo: antLogo,
    icon: GlobalOutlined
  },
  {
    id: 5,
    type: 'work',
    title: 'Cloud Computing Algorithm Intern',
    period: 'July 2017 - April 2018',
    organization: 'Huawei',
    organizationLink: 'https://www.huawei.com/',
    logo: huaweiLogo,
    icon: GlobalOutlined
  },
  {
    id: 6,
    type: 'work',
    title: 'Software Development (Startup)',
    period: 'February 2016 - June 2017',
    organization: 'Mazeal',
    organizationLink: null,
    logo: null,
    icon: GlobalOutlined
  }
]
</script>

<style scoped>
.home {
  padding: 24px;
  max-width: 100%; /* Ensure it expands with parent */
  margin: 0 auto;
}

@media (max-width: 768px) {
  .home {
    padding: 16px;
  }
}

.profile-card,
.content-card {
  width: 100%; /* Ensure cards fill available space */
  background: #fff;
  border-radius: 8px;
}

.profile-header {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 20px;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 16px;
  }

  .profile-info {
    text-align: center !important;
  }

  .contact-info, .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 140px !important;
    height: 140px !important;
  }

  .name {
    font-size: 24px !important;
  }

  .chinese-name {
    font-size: 18px !important;
  }

  .publication-title {
    font-size: 14px !important;
  }

  .publication-authors {
    font-size: 12px !important;
  }

  .publication-venue {
    font-size: 12px !important;
  }
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-info {
  text-align: left;
  flex: 1;
  min-width: 0;
}

.name {
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 8px;
  color: rgba(0, 0, 0, 0.85);
}

.chinese-name {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.65);
  margin: 0 0 8px;
}

.title {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0 0 16px;
}

.institution {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-links {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
}

.scholar-icon,
.social-icon {
  width: 16px;
  height: 16px;
  margin-top: 1px;
  object-fit: contain;
}

.social-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.social-link .anticon {
  color: rgba(0, 0, 0, 0.65);
  transition: color 0.3s ease;
}

.social-link:hover .anticon {
  color: #1890ff;
}

.social-link span {
  color: #1890ff;
}

.contact-info {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 768px) {
  .social-links {
    justify-content: center;
  }

  .contact-info {
    align-items: center;
  }

  .institution {
    justify-content: center;
  }
}

.contact-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.contact-link .anticon {
  color: rgba(0, 0, 0, 0.65);
  transition: color 0.3s ease;
}

.contact-link:hover .anticon {
  color: #1890ff;
}

.contact-link span {
  color: #1890ff;
}

.intro-text {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.65);
}

.intro-text p {
  margin: 0 0 16px;
}

.intro-text p:last-child {
  margin-bottom: 0;
}

.advisor-link {
  color: #1890ff; /* Ant Design's primary color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.advisor-link:hover {
  color: #40a9ff;
}

.interests-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.interests-list li {
  color: rgba(0, 0, 0, 0.65);
  margin: 8px 0;
  line-height: 1.6;
}

.experience-entry {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.experience-info {
  flex: 1;
}

.experience-item h4 {
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
}

.experience-period {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin: 4px 0;
}

.experience-company {
  margin-top: 8px;
}

.company-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  flex-shrink: 0;
}

.company-logo {
  height: 100px;
  width: 100px;
  object-fit: contain;
}

/* Mobile specific adjustments for experience section */
@media (max-width: 768px) {
  .experience-entry {
    flex-direction: column; /* Stack logo and text vertically */
    align-items: center; /* Center items when stacked */
    gap: 8px; /* Reduce gap */
  }

  .experience-info {
    text-align: center; /* Center text info when stacked */
  }

  .company-logo-container {
    width: 80px; /* Smaller container width */
  }

  .company-logo {
    height: 60px; /* Smaller logo size */
    width: 60px;
  }
}

.company-link {
  color: #1890ff; /* Ant Design's primary color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.company-link:hover {
  color: #40a9ff;
  text-decoration: underline;
}

.experience-details {
  padding-left: 20px;
  margin: 0;
}

.experience-details li {
  color: rgba(0, 0, 0, 0.65);
  margin: 4px 0;
  line-height: 1.6;
}

.experience-description {
  color: rgba(0, 0, 0, 0.65);
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  flex-direction: row !important;
  gap: 16px;
}

@media (max-width: 480px) {
  .experience-description {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .university-logo {
    align-self: center;
  }

  .university-info {
    padding-right: 0;
  }
}

.university-info {
  flex: 1;
  padding-right: 16px;
}

.university-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.school-name {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.university-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
}

.university-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.award-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.award-title {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 4px;
}

.award-date {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  font-style: italic;
}

.publications-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.publication-item {
  margin-bottom: 8px;
}

.publication-title {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
}

.publication-authors {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.publication-venue {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  font-style: italic;
  margin-top: 4px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-details {
  font-size: 14px;
  color: #1890ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.view-details:hover {
  color: #40a9ff;
}

@media (max-width: 480px) {
  .view-details {
    font-size: 12px;
  }
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.project-link {
  color: #1890ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #40a9ff;
  text-decoration: underline;
}

.project-description {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
  line-height: 1.6;
}

.project-tech {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  font-style: italic;
}

@media (max-width: 480px) {
  .project-title {
    font-size: 14px;
  }

  .project-description,
  .project-tech {
    font-size: 12px;
  }
}
</style> 