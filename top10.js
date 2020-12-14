function Multiply(permanentValue)
{
    this.value= permanentValue;

    this.read= function()
    {
        this.value *= prompt('Which two you want to multiply?');
    };
}

let multiply = new Multiply(1);
multiply.read();
multiply.read();
alert(multiply.value);