<template>
  <div class="blog-container">
    <h1 class="page-title">Posts</h1>
    <p class="coming-soon-message">The Posts feature is coming soon! For now, here's a sneak peek:</p>
    <a-input-search
      v-model:value="searchQuery"
      placeholder="Search posts..."
      style="width: 300px; margin-bottom: 24px;"
      @search="handleSearch"
      :allowClear="true"
    />
    <div class="posts-list">
      <a-card v-for="post in filteredPosts" :key="post.id" class="post-card">
        <div class="post-card-header">
          <h2 class="post-title">{{ post.title }}</h2>
          <span class="post-meta">
            By {{ post.author }} on {{ post.date }}
          </span>
        </div>
        <div class="post-content" v-html="post.excerpt"></div>
        <router-link :to="`/posts/${post.id}`" class="read-more-link">Read More</router-link>
        <div class="post-tags">
          <a-tag v-for="tag in post.tags" :key="tag" :color="getTagColor(tag)">{{ tag }}</a-tag>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import posts from '../data/posts';
import { Input } from 'ant-design-vue'; // Import Input for a-input-search

const searchQuery = ref('');

const handleSearch = (value) => {
  searchQuery.value = value;
};

const tagColors = {
  'Vue': 'green',
  'Development': 'blue',
  'Frontend': 'cyan',
  'AI': 'purple',
  'Multi-Modal': 'red',
  'Research': 'orange',
  'Productivity': 'geekblue',
  'Tips': 'gold',
  'Welcome': 'lime', // New color for Welcome tag
  'First Post': 'volcano', // New color for First Post tag
};

const getTagColor = (tag) => {
  return tagColors[tag] || 'default';
};

const filteredPosts = computed(() => {
  if (!searchQuery.value) {
    return posts;
  }
  const query = searchQuery.value.toLowerCase();
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(query);
    const excerptMatch = post.excerpt.toLowerCase().includes(query);
    const contentMatch = post.content.toLowerCase().includes(query);
    const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
    return titleMatch || excerptMatch || contentMatch || tagsMatch;
  });
});
</script>

<style scoped>
.blog-container {
  padding: 24px;
  max-width: 100%; /* Ensure it expands with parent */
  margin: 0 auto;
}

.page-title {
  font-size: 32px;
  font-weight: bold;
  margin-top: 0; /* Ensures it doesn't get pushed down by parent */
  margin-bottom: 32px;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post-card {
  width: 100%; /* Ensure cards fill available space */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align top for multi-line content */
  flex-wrap: wrap; /* Allow items to wrap */
  margin-bottom: 8px; /* Space between header and content */
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.85);
  flex-basis: 100%; /* Occupy full width initially */
  order: 1; /* Title first */
}

.post-meta {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  flex-basis: 100%; /* Occupy full width initially */
  order: 2; /* Meta second */
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.75);
  margin-top: 16px;
}

.post-tags {
  margin-top: 16px;
}

.post-tags .ant-tag {
  margin-right: 8px;
  font-size: 14px;
  padding: 6px 12px;
}

.read-more-link {
  display: inline-block;
  margin-top: 8px;
  color: #1890ff;
  text-decoration: none;
}

.read-more-link:hover {
  text-decoration: underline;
}

.ant-input-search {
  margin-left: auto;
  margin-right: auto;
  display: block; /* Center the search bar */
}

.coming-soon-message {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  margin-bottom: 24px;
}

/* Desktop specific styles for card header */
@media (min-width: 769px) {
  .post-card-header {
    flex-wrap: nowrap; /* Prevent wrapping on desktop */
    align-items: center; /* Re-align horizontally */
  }

  .post-title {
    flex-basis: auto; /* Revert to auto width */
    order: unset; /* Revert order */
    margin-right: 16px; /* Space between title and meta */
  }

  .post-meta {
    flex-basis: auto; /* Revert to auto width */
    order: unset; /* Revert order */
  }
}

@media (max-width: 768px) {
  .blog-container {
    padding: 16px;
  }

  .page-title {
    font-size: 24px;
    margin-top: 16px; /* Add top margin for mobile titles */
    margin-bottom: 24px;
  }

  .coming-soon-message {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .post-title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 18px;
  }

  .post-meta {
    font-size: 12px;
  }

  .post-content {
    font-size: 14px;
  }
}
</style> 