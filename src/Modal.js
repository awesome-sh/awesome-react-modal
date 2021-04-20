import styled from 'styled-components'

const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isOpen ? '100%' : '0%'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 51, 51, 0.459);
  backdrop-filter: 20px;
  transition: all 0.5s ease-out;
  overflow: hidden;
  backdrop-filter: blur(5px);

  * {
    box-sizing: border-box;
  }
`

const ModalComponent = styled.div`
  width: ${props => props.options.width ? `${props.options.width}px` : ''};
  /* height: ${props => props.options.height ? `${props.options.height}px` : ''}; */
  background: #fff;
  color: #444;
  box-shadow: 5px 15px 15px 5px rgba(47, 47, 47, 0.103);
  border-radius: 10px;

  h1 {
    margin: 0;
    padding: 0 0 0 25px;
    font-size: 24px;
    letter-spacing: -0.5px;
    height: 80px;
    line-height: 80px;
    border-bottom: ${props => props.styling.border ? `5px solid ${props.styling.border}` : '#eee'};
  }

  .modal-desc {
    padding: 30px 30px 30px 30px;
    text-align: ${props => props.options.textAlign ?  props.options.textAlign : 'center'};
    font-size: 16px;
    line-height: 40px;
    height: ${props => props.options.descHeight ? `${props.options.descHeight}px` : ''};
    overflow-y: ${props => props.options.isScroll ? 'scroll' : 'hidden'};
  }

  .modal-desc::-webkit-scrollbar {
    width: 10px;
    background-color: #fff;
    border-radius: 5px;
  }

  .modal-desc::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #eee;
  }

  .modal-bottom {
    border-top: 1px solid #eee;
    width: 100%;
    display: flex;

    button {
      cursor: pointer;
      width: 50%;
      height: 60px;
      outline: none;
      border: none;
      background: none;
      color:#444;
      font-size: 16px;

      &:hover {
        font-weight: bolder;
      }

      &:nth-child(1) {
        border-right: 1px solid #eee;
      }
    }
  }
`

function Modal( props ) {
  const { title, isOpen, desc, cancleText, cancleHandler, successText, successHandler, theme } = props

  if(isOpen) {
    window.document.body.style.overflow = 'hidden'
  } else {
    window.document.body.style.overflow = ''
  }

  const styling = {
    border: '#eee'
  }

  // Theme
  if( theme ) {
    if( theme.indexOf('#') === 0 ) {
      styling.border = theme;
    } else {
      switch ( theme ) {
        case 'white' : {
          styling.border = '#f5f5f5'
          break;
        }
        case 'black' : {
          styling.border = '#474747'
          break;
        }
        case 'navy' : {
          styling.border = '#38414e'
          break;
        }
        case 'pink' : {
          styling.border = '#db6e85'
          break;
        }
        case 'red' : {
          styling.border = '#b93f3f'
          break;
        }
        case 'orange' : {
          styling.border = '#f58443'
          break;
        }
        case 'yellow' : {
          styling.border = '#f5d132'
          break;
        }
        case 'green' : {
          styling.border = '#a1c233'
          break;
        }
        case 'blue' : {
          styling.border = '#4290da'
          break;
        }
        default: {
          styling.border = '#eee'
          break;
        }
      }
    }
  }

  return (
    <>
      <ModalContainer isOpen={isOpen}>
        <ModalComponent options={props} styling={styling}>
          { title && <h1>{title}</h1> }
          { desc && <div className="modal-desc" dangerouslySetInnerHTML={{ __html: desc }} /> }
          <div className="modal-bottom">
            <button onClick={cancleHandler}>{cancleText}</button>
            { successHandler && <button onClick={successHandler}>{successText}</button> }
          </div>
        </ModalComponent>
      </ModalContainer>
    </>
  );
}

export default Modal;
