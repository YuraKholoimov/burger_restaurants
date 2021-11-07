import  React from "react";





class AddBurgerForm extends React.Component {

    nameRef = React.createRef()
    priseRef = React.createRef()
    selectRef = React.createRef()

    createBurger = (e) => {
        e.preventDefault()
        
        const burger = {
           name: this.nameRef.current.value,
           prise: this.priseRef.current.value
        }

        
        this.props.addBurger(burger)
        console.log(e.target);
        e.target.reset()
    }

    render() {
        return (
            <form className='burger-edit' onSubmit={this.createBurger}>
                <input ref={this.nameRef} name="name" placeholder='name' type='text' autoComplete='off' />
                <input ref={this.priseRef} name="price" placeholder='price' type='text' autoComplete='off' />

                <select name="status" className='status'>
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать из меню</option>
                </select>

                <textarea name="desc" placeholder='desc' />
                <input name="image" placeholder='image' type='text' autoComplete='off' />
                <button type='submite'>Добавить в меню</button>
            </form>
        )
    }                       
}
export default AddBurgerForm;