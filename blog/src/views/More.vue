<template>
  <div class="more-container">
    <h1 class="page-title">More About Me</h1>
    <a-space direction="vertical" size="large" style="width: 100%">
      <!-- Awards Section -->
      <a-card class="section-card" id="award" title="Awards">
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
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Student Leader, Wangxuan Institute of Computer Technology, PKU</div>
              <div class="award-date">December 2022</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Director's Excellence Award, Institute of Information Engineering, CAS</div>
              <div class="award-date">May 2021</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Student Award, Merit Student Award & Academic Scholarship, UCAS</div>
              <div class="award-date">May 2020</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Graduate of Shandong University & Shandong Province</div>
              <div class="award-date">June 2018</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">National Inspirational Scholarship</div>
              <div class="award-date">2015, 2017</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">First Prize, Qilu Software Competition</div>
              <div class="award-date">2016</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Bronze Award, China College Students' Internet+ Innovation and Entrepreneurship Competition</div>
              <div class="award-date">2016</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Individual in Innovation and Entrepreneurship, Shandong University</div>
              <div class="award-date">2016</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding Student Scholarship, Shandong University</div>
              <div class="award-date">2015, 2016, 2017</div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <TrophyOutlined style="font-size: 16px" />
            </template>
            <div class="award-item">
              <div class="award-title">Outstanding League Member & Student Leader, Shandong University</div>
              <div class="award-date">2015, 2016, 2017</div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- Experience Section -->
      <a-card class="section-card" title="Experience">
        <a-timeline>
          <a-timeline-item>
            <template #dot>
              <ClockCircleOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>VLA Algorithm Intern</h4>
                <p class="experience-period">May 2025 - Present</p>
                <div class="experience-company">
                  <a href="https://spirit-ai.com/" target="_blank" class="company-link">Spirit AI</a>
                </div>
                <ul class="experience-details">
                  <li>Data synthesis, conversion, and cleaning for Robotic Vision-Language-Action (VLA) pre-training .</li>
                  <li>Supervised Fine-Tuning (SFT) for multi-task VLA models.</li>
                </ul>
              </div>
              <div class="company-logo-container">
                <img :src="spiritAILogo" alt="Spirit AI logo" class="company-logo" />
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <GlobalOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>Multi-modal Algorithm Intern</h4>
                <p class="experience-period">October 2024 - May 2025</p>
                <div class="experience-company">
                  <a href="https://www.zhipuai.cn/" target="_blank" class="company-link">Zhipu AI</a>
                </div>
                <ul class="experience-details">
                  <li>Responsible for data synthesis, SFT, and evaluation of large multi-modal video models on first-person perspective tasks.</li>
                  <li>Developed a real-time streaming video dialogue system.</li>
                </ul>
              </div>
              <div class="company-logo-container">
                <img :src="zhipuAILogo" alt="Zhipu AI logo" class="company-logo" />
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <GlobalOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>Tencent Hunyuan Open Source Project (Remote)</h4>
                <p class="experience-period">August 2024 - October 2024</p>
                <div class="experience-company">
                  <a href="https://hunyuan.tencent.com/" target="_blank" class="company-link">Tencent</a>
                </div>
                <ul class="experience-details">
                  <li>Worked on image generation and editing based on Hunyuan-DiT with layout constraints. (Recognized as an Outstanding Contributor)</li>
                </ul>
              </div>
              <div class="company-logo-container">
                <img :src="tencentLogo" alt="Tencent logo" class="company-logo" />
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <GlobalOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>Intelligent Customer Service Algorithm Intern</h4>
                <p class="experience-period">March 2019 - July 2019</p>
                <div class="experience-company">
                  <a href="https://www.antgroup.com/" target="_blank" class="company-link">Ant Group</a>
                </div>
                <ul class="experience-details">
                  <li>Integrated BERT pre-trained models to extract dialogue embeddings.</li>
                  <li>Incorporated Pinyin to mitigate errors from speech-to-text conversion. (Contributed to a patent)</li>
                </ul>
              </div>
              <div class="company-logo-container">
                <img :src="antLogo" alt="Ant Group logo" class="company-logo" />
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <GlobalOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>Cloud Computing Algorithm Intern</h4>
                <p class="experience-period">July 2017 - April 2018</p>
                <div class="experience-company">
                  <a href="https://www.huawei.com/" target="_blank" class="company-link">Huawei</a>
                </div>
                <ul class="experience-details">
                  <li>Built and maintained a DevOps environment for the team using Jenkins and improved the Docker health management system system framework.</li>
                  <li>Conducted batch testing on the performance differences between virtual machines and Docker under OpenStack. (Received the Huawei Hangzhou Research Institute Innovation Award)</li>
                </ul>
              </div>
              <div class="company-logo-container">
                <img :src="huaweiLogo" alt="Huawei logo" class="company-logo" />
              </div>
            </div>
          </a-timeline-item>
          <a-timeline-item>
            <template #dot>
              <GlobalOutlined style="font-size: 16px" />
            </template>
            <div class="experience-entry">
              <div class="experience-item">
                <h4>Software Development (Startup)</h4>
                <p class="experience-period">February 2016 - June 2017</p>
                <div class="experience-company">Mazeal</div>
                <ul class="experience-details">
                  <li>MarkHere (iOS): A location-based sharing application.</li>
                  <li>3D Menu (Android): A 3D/AR-based recipe application.</li>
                  <li>Management Systems (Java/JavaScript): Developed various systems including a classroom management system, parking management system, and property management system.</li>
                </ul>
              </div>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-card>
      
      <!-- Skills & Tools -->
      <a-card class="section-card" title="Skills & Tools">
        <template v-for="(skills, category) in skillsAndTools" :key="category">
          <h3 class="skill-category">{{ category }}</h3>
          <div class="skills-group">
            <a-tag v-for="skill in skills" 
                   :key="skill"
                   :color="getSkillColor(category)"
                   class="skill-tag">
              {{ skill }}
            </a-tag>
          </div>
        </template>
      </a-card>

      <!-- Service Section -->
      <a-card class="section-card" title="Service">
        <a-timeline>
          <a-timeline-item v-for="item in service" :key="item.id">
            <template #dot>
              <component :is="item.icon" style="font-size: 16px" />
            </template>
            <div class="service-item">
              <div class="service-title">
                {{ item.title }}
              </div>
              <div class="service-content" v-html="item.content"></div>
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
  TrophyOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  ReadOutlined,
  TeamOutlined
} from '@ant-design/icons-vue';

import spiritAILogo from '../assets/logo/spirit-ai.svg';
import zhipuAILogo from '../assets/logo/zhipu-ai.png';
import tencentLogo from '../assets/logo/tencent.jpeg';
import huaweiLogo from '../assets/logo/Huawei Logo.png';
import antLogo from '../assets/logo/ant.png';

const service = [
  {
    id: 1,
    type: 'teaching',
    title: 'Teaching Assistant ',
    content: 'Vision and Language, Fall 2024, Peking University',
    icon: ReadOutlined
  },
  {
    id: 2,
    type: 'professional',
    title: 'Reviewer',
    content: 'IEEE TCSVT<br/>ICCV<br/>IJCAI<br/>ICML<br/>NeurIPS<br/>ICLR<br/>EMNLP<br/>NAACL',
    icon: TeamOutlined
  }
];

const skillsAndTools = {
  'Programming Languages': [
    'Python',
    'JavaScript',
    'Java',
  ],
  'Frameworks & Libraries': [
    'PyTorch',
    'Vue',
    'Flask',
    'Flutter'
  ],
  'Tools & Platforms': [
    'Git',
    'Docker',
    'Linux',
    'LaTeX',
  ]
};

const skillColors = {
  'Programming Languages': 'blue',
  'Frameworks & Libraries': 'green',
  'Tools & Platforms': 'purple'
};

const getSkillColor = (category) => {
  return skillColors[category] || 'default';
};

</script>

<style scoped>
.more-container {
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

.section-card {
  background: #fff;
  border-radius: 8px;
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

.experience-entry {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.experience-item {
  flex: 1;
}

.experience-item h4 {
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 4px;
}

.experience-period {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 8px;
}

.experience-company {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
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

.company-link {
  color: #1890ff;
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

.teaching-title {
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

.teaching-meta {
  color: rgba(0, 0, 0, 0.45);
  margin: 8px 0;
}

.teaching-meta .anticon {
  margin-right: 8px;
}

.teaching-description {
  color: rgba(0, 0, 0, 0.65);
  margin-top: 12px;
  line-height: 1.6;
}

.service-year {
  color: rgba(0, 0, 0, 0.45);
}

.skill-category {
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0 12px;
  color: rgba(0, 0, 0, 0.85);
}

.skill-category:first-child {
  margin-top: 0;
}

.skills-group {
  margin-bottom: 24px;
}

.skills-group:last-child {
  margin-bottom: 0;
}

.skill-tag {
  margin: 0 8px 8px 0;
  padding: 4px 12px;
  border-radius: 4px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-title {
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 4px;
}

.service-content {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .more-container {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .award-title {
    font-size: 14px;
  }
  
  .award-date {
    font-size: 12px;
  }

  .teaching-title {
    font-size: 14px;
  }

  .skill-category {
    font-size: 14px;
  }

  .service-title {
    font-size: 14px;
  }

  .service-content {
    font-size: 12px;
  }
}
</style> 