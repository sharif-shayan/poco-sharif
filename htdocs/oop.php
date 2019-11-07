<?php
/*object oriented programming in php*/

abstract class Human
{
    abstract public function growing();
    public function hasName()
    {
        //every human has a name    
    }
}
class Person extends Human
{
    private $name;
    public $age;
    public $language;
    protected $martialStatus;
    public function __construct($name, $age, $language, $martialStatus)
    {
        $this->name = $name;
        $this->age = $age;
        $this->language = $language;
        $this->martialStatus = $martialStatus;
    }
    public function growing()
    {
        echo " Raziq is klaning";
    }

    public function __destruct()
    {
        echo " This object was destroyed ";
    }
    public function sayHi()
    {
        echo " Hi guys. I am " . $this->name . "<br>";
    }
}
class Child extends Person
{
    public $mother;
    public $father;

    public function growing()
    {
        //child still growing
        echo "as child im still growing";
    }
}


class Adult extends Person
{
    public function growing()
    {
        //adult not growing
        echo "as an adult person im not growing any more";
        if ($this->age > 65) { }
    }
}


$sharif = new Child("Shayan", 29, "Far", "single");
$sharif->sayHi();
$sharif = new Person("Sharif", 29, "Per", "single");
$sharif->sayHi();
$sharif->growing();
echo "<br> I speak " . $sharif->language . "<br>";
echo "I am " . $sharif->age . "<br>";
