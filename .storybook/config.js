import { configure } from '@storybook/vue'

// ストーリーの読み込み
function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
