<template>
  <div class="publication-container">
    <h1 class="page-title">Publications</h1>
    <a-space direction="vertical" size="large" style="width: 100%">
      <a-card v-for="pub in publications" 
              :key="pub.id" 
              class="publication-card"
              :bordered="false">
        <a-row :gutter="[24, 16]" align="middle">
          <a-col :xs="24" :sm="8" :md="6">
            <img :alt="pub.title" :src="pub.image" class="publication-image"/>
          </a-col>
          <a-col :xs="24" :sm="16" :md="18">
            <div class="publication-content">
              <h2 class="publication-title">{{ pub.title }}</h2>
              
              <div class="publication-authors">
                <UserOutlined />
                <span v-for="(author, index) in pub.authors" :key="author" 
                      :class="{ 'highlight-author': author.includes('Dejie Yang') }">
                  {{ author }}{{ index < pub.authors.length - 1 ? ', ' : '' }}
                </span>
              </div>

              <div class="publication-venue">
                <CalendarOutlined /> {{ pub.year }}
                <BookOutlined style="margin-left: 16px"/> {{ pub.venue }}
              </div>

              <p class="publication-abstract" v-if="pub.abstract">
                <span v-if="!pub.isAbstractExpanded && pub.abstract.length > 200">
                  {{ pub.abstract.substring(0, 200) }}...
                </span>
                <span v-else>
                  {{ pub.abstract }}
                </span>
              </p>

              <div class="abstract-toggle-wrapper" v-if="pub.abstract && pub.abstract.length > 200">
                <a-button 
                  type="link" 
                  @click="toggleAbstract(pub)" 
                  class="toggle-abstract-btn"
                >
                  {{ pub.isAbstractExpanded ? 'Read Less' : 'Read More' }}
                </a-button>
              </div>

              <div class="publication-actions">
                <a-space>
                  <a-button v-if="pub.pdf || pub.doi" type="link" :href="pub.pdf || pub.doi" target="_blank">
                    <template #icon><FilePdfOutlined /></template>
                    PDF
                  </a-button>
                  <a-button v-if="pub.code && pub.code !== '#'" type="link" :href="pub.code" target="_blank">
                    <template #icon><GithubOutlined /></template>
                    Code
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
import { ref } from 'vue'
import { 
  UserOutlined, 
  CalendarOutlined, 
  BookOutlined,
  FilePdfOutlined, 
  GithubOutlined, 
  LinkOutlined
} from '@ant-design/icons-vue'

const publications = ref([
  {
    id: 1,
    title: 'AR-VRM: Imitating Human Motions for Visual Robot Manipulation with Analogical Reasoning',
    authors: ['Dejie Yang', 'Zijing Zhao', 'Yang Liu'],
    year: 2025,
    venue: 'International Conference on Computer Vision (ICCV)',
    pdf: 'https://arxiv.org/abs/2403.xxxxx',
    code: 'https://github.com/idejie/AR-VRM',
    image: new URL('../assets/paper/iccv2025.png', import.meta.url).href,
    abstract: 'Visual Robot Manipulation (VRM) aims to enable a robot to follow natural language instructions based on robot states and visual observations, and therefore requires costly multi-modal data. To compensate for the deficiency of robot data, existing approaches have employed vision-language pretraining with large-scale data. However, they either utilize web data that differs from robotic tasks, or train the model in an implicit way (e.g., predicting future frames at the pixel level), thus showing limited generalization ability under insufficient robot data. In this paper, we propose to learn from large-scale human action video datasets  in an explicit way (i.e., imitating human actions from hand keypoints), introducing Visual Robot Manipulation with Analogical Reasoning (AR-VRM). To acquire action knowledge explicitly from human action videos, we propose a keypoint Vision-Language Model (VLM) pretraining scheme, enabling the VLM to learn human action knowledge  and directly predict human hand keypoints. During fine-tuning on robot data, to facilitate the robotic arm in imitating the action patterns of human motions, we first retrieve human action videos that perform similar manipulation tasks  and have similar historical observations , and then learn the Analogical Reasoning (AR) map between human hand keypoints and robot components. Taking advantage of focusing on action keypoints instead of irrelevant visual cues, our method achieves leading performance on the CALVIN benchmark {and real-world experiments}. In few-shot scenarios, our AR-VRM outperforms previous methods by large margins , underscoring the effectiveness of explicitly imitating human actions under data scarcity.',
    isAbstractExpanded: false
  },
  {
    id: 2,
    title: 'Hierarchical Sub-action Tree for Continuous Sign Language Recognition',
    authors: ['Dejie Yang', 'Zhu Xu', 'Xinjie Gao', 'Yang Liu'],
    year: 2025,
    venue: 'International Conference on Multimedia and Expo (ICME)',
    pdf: 'https://arxiv.org/abs/2506.20947',
    code: 'https://github.com/idejie/HST-SLR ',
    image: new URL('../assets/paper/ICME2025.png', import.meta.url).href,
    abstract: 'Continuous sign language recognition (CSLR) aims to transcribe untrimmed videos into glosses, which are typically textual words. Recent studies indicate that the lack of large datasets and precise annotations has become a bottleneck for CSLR due to insufficient training data. To address this, some works have developed cross-modal solutions to align visual and textual modalities. However, they typically extract textual features from glosses without fully utilizing their knowledge. In this paper, we propose the Hierarchical Sub-action Tree (HST), termed HST-CSLR, to efficiently combine gloss knowledge with visual representation learning. By incorporating gloss-specific knowledge from large language models, our approach leverages textual information more effectively. Specifically, we construct an HST for textual information representation, aligning visual and textual modalities step-by-step and benefiting from the tree structure to reduce computational complexity. Additionally, we impose a contrastive alignment enhancement to bridge the gap between the two modalities. Experiments on four datasets (PHOENIX-2014, PHOENIX-2014T, CSL-Daily, and Sign Language Gesture) demonstrate the effectiveness of our HST-CSLR.',
    isAbstractExpanded: false
  },
  {
    id: 3,
    title: 'PlanLLM: Video procedure planning with refinable large language models',
    authors: ['Dejie Yang', 'Zijing Zhao', 'Yang Liu'],
    year: 2025,
    venue: 'AAAI Conference on Artificial Intelligence (AAAI)',
    doi: 'https://ojs.aaai.org/index.php/AAAI/article/view/32992',
    code: 'https://github.com/idejie/PlanLLM',
    image: new URL('../assets/paper/AAAI2025.png', import.meta.url).href,
    abstract: "Video procedure planning, ie, planning a sequence of action steps given the video frames of start and goal states, is an essential ability for embodied AI. Recent works utilize Large Language Models (LLMs) to generate enriched action step description texts to guide action step decoding. Although LLMs are introduced these methods decode the action steps into a closed-set of one-hot vectors, limiting the model's capability of generalizing to new steps or tasks. Additionally, fixed action step descriptions based on world-level commonsense may contain noise in specific instances of visual states. In this paper, we propose PlanLLM, a cross-modal joint learning framework with LLMs for video procedure planning. We propose an LLM-Enhanced Planning module which fully uses the generalization ability of LLMs to produce free-form planning output and to enhance action step decoding. We also propose Mutual Information Maximization module to connect world-level commonsense of step descriptions and sample-specific information of visual states, enabling LLMs to employ the reasoning ability to generate step sequences. With the assistance of LLMs, our method can both closed-set and open vocabulary procedure planning tasks. Our PlanLLM achieves superior performance on three benchmarks, demonstrating the effectiveness of our designs.",
    isAbstractExpanded: false
  },
  {
    id: 4,
    title: '3D Vision and Language Pretraining with Large-scale Synthetic Data',
    authors: ['Dejie Yang', 'Zhu Xu', 'Wentao Mo', 'Qingchao Chen', 'Siyuan Huang', 'Yang Liu'],
    year: 2024,
    venue: 'International Joint Conference on Artificial Intelligence (IJCAI)',
    pdf: 'https://arxiv.org/abs/2407.06084',
    code: 'https://github.com/idejie/3DSyn',
    image: new URL('../assets/paper/IJCAI2024.png', import.meta.url).href,
    abstract: '3D Vision-Language Pre-training (3D-VLP) aims to provide a pre-train model which can bridge 3D scenes with natural language, which is an important technique for embodied intelligence. However, current 3D-VLP datasets are hindered by limited scene-level diversity and insufficient fine-grained annotations (only 1.2K scenes and 280K textual annotations in ScanScribe), primarily due to the labor-intensive of collecting and annotating 3D scenes. To overcome these obstacles, we construct SynVL3D, a comprehensive synthetic scene-text corpus with 10K indoor scenes and 1M descriptions at object, view, and room levels, which has the advantages of diverse scene data, rich textual descriptions, multi-grained 3D-text associations, and low collection cost. Utilizing the rich annotations in SynVL3D, we pre-train a simple and unified Transformer for aligning 3D and language with multi-grained pretraining tasks. Moreover, we propose a synthetic-to-real domain adaptation in downstream task fine-tuning process to address the domain shift. Through extensive experiments, we verify the effectiveness of our model design by achieving state-of-the-art performance on downstream tasks including visual grounding, dense captioning, and question answering.',
    isAbstractExpanded: false
  },
  {
    id: 5,
    title: 'Active Object Detection with Knowledge Aggregation and Distillation from Large Models',
    authors: ['Dejie Yang', 'Yang Liu'],
    year: 2024,
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)',
    doi: 'https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Active_Object_Detection_with_Knowledge_Aggregation_and_Distillation_from_Large_CVPR_2024_paper.html',
    code: 'https://github.com/idejie/KAD',
    image: new URL('../assets/paper/gaze2022.png', import.meta.url).href,
    abstract: 'Accurately detecting active objects undergoing state changes is essential for comprehending human interactions and facilitating decision-making. The existing methods for active object detection (AOD) primarily rely on visual appearance of the objects within input such as changes in size shape and relationship with hands. However these visual changes can be subtle posing challenges particularly in scenarios with multiple distracting no-change instances of the same category. We observe that the state changes are often the result of an interaction being performed upon the object thus propose to use informed priors about object related plausible interactions (including semantics and visual appearance) to provide more reliable cues for AOD. Specifically we propose a knowledge aggregation procedure to integrate the aforementioned informed priors into oracle queries within the teacher decoder offering more object affordance commonsense to locate the active object. To streamline the inference process and reduce extra knowledge inputs we propose a knowledge distillation approach that encourages the student decoder to mimic the detection capabilities of the teacher decoder using the oracle query by replicating its predictions and attention. Our proposed framework achieves state-of-the-art performance on four datasets namely Ego4D Epic-Kitchens MECCANO and 100DOH which demonstrates the effectiveness of our approach in improving AOD.',
    isAbstractExpanded: false
  },
  {
    id: 6,
    title: 'Recent Advances in Class-incremental Learning',
    authors: ['Dejie Yang', 'Minghang Zheng', 'Weishuai Wang', 'Sizhe Li', 'Yang Liu'],
    year: 2023,
    venue: 'International Conference on Image and Graphics (ICIG)',
    doi: 'https://link.springer.com/chapter/10.1007/978-3-031-46308-2_18',
    code: null,
    image: new URL('../assets/paper/ICIG2023.png', import.meta.url).href,
    abstract: 'A large number of deep learning models have been applied in a wide range of fields nowadays. However, most existing models can only generalize to the categories in the training set and are unable to learn new categories incrementally. In practical applications, new categories or tasks will constantly emerge, which requires models to continuously learn new category knowledge like humans while maintaining existing category knowledge. Such the learning process, i.e., class-incremental learning (CIL), abstracts more attention from the research community. CIL faces several challenges, such as imbalanced data distribution, limited model memory capacity, and the catastrophic forgetting of category representation. Therefore, we provide an up-to-date and detailed overview of CIL methods in this survey, including data-based, model-based, and representation-based approaches. We also discuss the impact of pre-trained models on CIL and compare the latest methods on widely-used benchmarks. Finally, we summarize the challenges and future directions of CIL.',
    isAbstractExpanded: false
  },
  {
    id: 7,
    title: 'Deep Semantic-alignment Hashing for Unsupervised Cross-modal Retrieval',
    authors: ['Dejie Yang', 'Dayan Wu', 'Wanqian Zhang', 'Haisu Zhang', 'Bo Li', 'Weiping Wang'],
    year: 2020,
    venue: 'International Conference on Multimedia Retrieval (ICMR)',
    doi: 'https://dl.acm.org/doi/abs/10.1145/3372278.3390673',
    code: 'https://github.com/idejie/DSAH',
    image: new URL('../assets/paper/ICMR2020.png', import.meta.url).href,
    abstract: "Deep hashing methods have achieved tremendous success in cross-modal retrieval, due to its low storage consumption and fast retrieval speed. In real cross-modal retrieval applications, it's hard to obtain label information. Recently, increasing attention has been paid to unsupervised cross-modal hashing. However, existing methods fail to exploit the intrinsic connections between images and their corresponding descriptions or tags (text modality). In this paper, we propose a novel Deep Semantic-Alignment Hashing (DSAH) for unsupervised cross-modal retrieval, which sufficiently utilizes the co-occurred image-text pairs. DSAH explores the similarity information of different modalities and we elaborately design a semantic-alignment loss function, which elegantly aligns the similarities between features with those between hash codes. Moreover, to further bridge the modality gap, we innovatively propose to reconstruct features of one modality with hash codes of the other one. Extensive experiments on three cross-modal retrieval datasets demonstrate that DSAH achieves the state-of-the-art performance.",
    isAbstractExpanded: false
  }
])

const toggleAbstract = (pub) => {
  pub.isAbstractExpanded = !pub.isAbstractExpanded;
};
</script>

<style scoped>
.publication-container {
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

.publication-card {
  background: #fff;
  border-radius: 8px;
  transition: all 0.3s;
  margin-bottom: 16px;
}

.publication-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.publication-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.publication-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.4;
}

.publication-authors {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
}

.publication-authors .anticon {
  margin-right: 8px;
}

.highlight-author {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

.publication-venue {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 16px;
}

.publication-venue .anticon {
  margin-right: 8px;
}

.publication-abstract {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 8px;
}

.abstract-toggle-wrapper {
  margin-bottom: 16px;
}

.toggle-abstract-btn {
  padding: 0;
  height: auto;
  line-height: 1.6;
}

.publication-actions {
  margin-top: auto;
}

.publication-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}

@media (max-width: 768px) {
  .publication-container {
    padding: 16px;
}

  .page-title {
    font-size: 24px;
    margin-bottom: 24px;
}

  .publication-title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .publication-title {
    font-size: 16px;
}
}

@media (max-width: 576px) {
  .publication-image {
    margin-bottom: 16px;
  }
}
</style> 