import { shallowMount } from '@vue/test-utils'
import Btn from './BtnError'

const factory = () =>
  shallowMount(Btn, {
    propsData: {
      label: 'click me!'
    }
  })

describe('BtnError', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('calls handleClick on click', () => {
    const wrapper = factory()
    const handleClickMock = jest.fn()
    wrapper.vm.visible = true
    wrapper.setMethods({
      handleClick: handleClickMock
    })
    wrapper.find('button').trigger('click')
    expect(handleClickMock).toHaveBeenCalled()
  })

  test('clicked is true after click', () => {
    const wrapper = factory()
    wrapper.vm.visible = true
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.clicked).toBe(true)
  })
})
