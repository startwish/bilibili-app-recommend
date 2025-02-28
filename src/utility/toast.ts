import { APP_NAME_ROOT_CLASSNAME, OPERATION_FAIL_MSG, REQUEST_FAIL_MSG } from '$common'
import { colorPrimaryValue } from '$components/ModalSettings/theme.shared'
import { css } from '@emotion/css'

const toastContainer = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 90000;
  padding: 12px 24px;
  font-size: 14px;

  min-width: 200px;
  width: max-content;
  max-width: 450px;

  color: #fff;
  background-color: #ffb243;
  background-color: ${colorPrimaryValue};
  border-radius: 6px;
  white-space: pre-wrap;
`

const singleLine = css`
  text-align: center;
`

export function toast(msg: string, duration = 2000) {
  const div = document.createElement('div')
  div.classList.add(toastContainer, APP_NAME_ROOT_CLASSNAME)
  div.innerText = msg

  if (!msg.includes('\n') && !msg.includes('<br')) {
    div.classList.add(singleLine)
  }

  document.body.appendChild(div)
  setTimeout(() => div.remove(), duration)
}

export function toastRequestFail() {
  return toast(REQUEST_FAIL_MSG)
}

export function toastOperationFail() {
  return toast(OPERATION_FAIL_MSG)
}
