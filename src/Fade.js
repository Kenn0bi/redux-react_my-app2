import { Transition } from 'react-transition-group';

const duration = 300;

const transitionsStyle = {
  entering: { 
    // opacity: 1 
    backgroundColor: '#7ad175'
},
  entered: { 
    // opacity: 1 
    backgroundColor: '#7ad175'
},
  exiting: { 
    // opacity: 0 
    backgroundColor: '#3ea6cf'
},
  exited: { 
    // opacity: 0 
    backgroundColor: '#3ea6cf'
}
};

export const Fade = function({in: inProp}) {
    return <Transition in={inProp} timeout={duration}>
        {state => (
            <div style={{
                transition: `opacity ${duration} ms ease-in`,
                opacity: 1,
                ...transitionsStyle[state]
            }}>
                Привет, мир!
            </div>
        )}
    </Transition>
}