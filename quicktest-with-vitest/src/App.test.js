import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

import App from './App.vue'

const mockPost = {
    userId: 1,
    id: 1,
    title: 'Test Post',
    body: 'test body...'
}

describe("Posts App", () => {
    test('user can create a new post', async ()=> {
        vi.spyOn(axios, "post").mockResolvedValueOnce({ data: mockPost})

        const wrapper = mount(App)

        //fill in the input fields
        await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)
        await wrapper.find('[data-testid="body-input"]').setValue(mockPost.body)

        //submit the form
        await wrapper.find('[data-testid="post-form"]').trigger('submit')

        expect(wrapper.find('[type="submit"]').html()).toContain("Creating...")

        await flushPromises

        //assert that the created post is displayed on screen
        expect(wrapper.html()).toContain(mockPost.title)
        expect(wrapper.html()).toContain(mockPost.body)

    })
})