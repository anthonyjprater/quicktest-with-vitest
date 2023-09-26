/* eslint-disable no-undef */

import PostCard from '../PostCard.vue'
import { mount } from '@vue/test-utils'



describe('Post Card Component', () => {
  test('created post render correctly', () => {
    const title = 'Test Post'
    const body = 'test post body...'
    const wrapper = mount(PostCard, {
      props: { title, body }
    })

    expect(wrapper.html()).toMatchSnapshot
  })
})
