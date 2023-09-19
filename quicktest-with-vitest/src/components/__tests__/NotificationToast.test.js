import { mount } from '@vue/test-utils'
import NotificationToast from '@/components/NotificationToast.vue'
import { describe, expect, test } from 'vitest'

describe('Notification Component', () => {
  test('renders the correct style for error', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div role=\\"alert\\" class=\\"notification notification--errors\\">
        <p class=\\"notification__text\\"></p><button title=\\"close\\" class=\\"notification__button\\"> ✕ </button>
      </div>"
    `)
  })

  test('renders the correct style for success', () => {
    const status = 'success'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
  })

  test('renders the correct style for warning', () => {
    const status = 'info'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
  })

  test('notification slides up when message is empty', () => {
    const message = ''
    const wrapper = mount(NotificationToast, {
      props: { message }
    })
    expect(wrapper.classes('notification--slide-up')).toBe(false)
  })

  test('emits event when closed button is clicked', async () => {
    const wrapper = mount(NotificationToast, {
      data() {
        return {
          clicked: false
        }
      }
    })
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('clear-notification')
  })

  test('renders correct message to the viewer', () => {
    const message = 'test message'
    const wrapper = mount(NotificationToast, {
      props: { message }
    })
    expect(wrapper.find('p').text()).toBe(message)
  })
})
