import { useRouter } from 'next/router';
import { useRef } from 'react';

// import classes from './NewMeetupForm.module.css';
import classes from '../../styles/New-Meetup-Form.module.css';
function NewMeetupForm(props) {
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    const router = useRouter();


    async function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetupData)

        const response = await fetch('/api/new-meetup', {

            headers: {
                'Content-Type': 'application/json'
            }, method: "POST",
            body: JSON.stringify(meetupData)
        })

        const data = await response.json()
        router.push('/');
    }

    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    required
                    rows='5'
                    ref={descriptionInputRef}
                ></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>

    );
}

export default NewMeetupForm;