本次实验主要内容为使用scala编程，完成两个练习：

# 练习 1：实现一个简单的类及伴生对象

1. 实现一个名字为Student的类，这个类包括属性：Name:String,Age:Int,ID:String

包括方法updateName更新姓名,updateAge更新年龄,getInfo打印学生全部信息

定义类后，以下能够成功运行

```scala
val stu1=new Student("Alice",20,"S001")

stu1.updateName("Bob")

stu1.updateAge(31)

stu1.getInfo
```

2. 使用一个同名的单例对象，包含方法apply定义单例对象后，能够成功运行以下语句

```scala
val stu2 = Student("Tom",21,"S002")
```


# 练习 2：实现一个简单的计算器

要求：

1. 创建一个 Calculator 对象，包含一个 calculate 方法，接收两个整数和一个表示操作的字符（+, -, *, /）。

2. 使用模式匹配来根据不同的操作符执行相应的运算，并返回计算结果。

---

# 练习一
## 我的代码
```scala
class Student(param1: String, param2: Int, param3: String)
{
  val Name:String = param1
  val Age:Int = param2
  val ID:String = param3 //可以写var吗？？？
  //注意Unit写上
  def updateName = (newname:String):Unit
  {
    Name = newname
  }

  def updateAge = (newage:Int):Unit
  {
    Age = newage
  }
  
  def getInfo():Unit = {
    printf("Name:%s,Age:%d\n,ID:%s",Name,Age,ID)
  }
  /*另一种写法
  def getInfo(): Unit = {
    println(s"Name: $Name, Age: $Age, ID: $ID")
  }
  */
}


val stu1=new Student("Alice",20,"S001")

stu1.updateName("Bob")

stu1.updateAge(31)

stu1.getInfo



//单例对象
object Student
{
  def apply(param1: String, param2: Int, param3: String) = new Student(param1: String, param2: Int, param3: String)
}

val stu2 = Student("Tom",21,"S002")
```

## 存在的问题
- **不能直接修改 `val` 变量**：在 `Student` 类中，`Name` 和 `Age` 被定义为 `val`（不可变），因此无法在 `updateName` 和 `updateAge` 方法中更改它们的值。需要将 `val` 改为 `var`，或者使用类的 `copy` 方法创建不可变对象。
- **`ID` 可以定义为 `var` 吗？**：是的，可以将 `ID` 定义为 `var`，以允许在需要时修改它。但在 Scala 的设计中，不可变对象更受推崇，因此除非有明确需求，一般更建议使用 `val`。
- **`updateName` 和 `updateAge` 方法的语法错误**：方法的定义不正确。需要将 `=` 移到参数之前，并去掉方法体括号外的 `:Unit`，具体见下面的代码。
- **`getInfo` 方法中的格式化问题**：`printf` 的格式字符串有多余的 `\n`，应该将它移到 `ID` 输出的后面。
- **工厂方法的 `apply` 定义有误**：在 `apply` 方法中，参数类型不需要重复标注。

## 修改后的代码

```scala
class Student(var Name: String, var Age: Int, val ID: String) {
  
  // 定义方法时直接使用括号，去掉等号和外部的返回类型
  def updateName(newname: String): Unit = {
    Name = newname
  }

  def updateAge(newage: Int): Unit = {
    Age = newage
  }
  
  def getInfo(): Unit = {
    printf("Name: %s, Age: %d, ID: %s\n", Name, Age, ID)
  }

  /* 另一种写法 */
  def getInfoAlternative(): Unit = {
    println(s"Name: $Name, Age: $Age, ID: $ID")
  }
}

val stu1 = new Student("Alice", 20, "S001")
stu1.updateName("Bob")
stu1.updateAge(31)
stu1.getInfo()

// 单例对象
object Student {
  def apply(param1: String, param2: Int, param3: String) = new Student(param1, param2, param3)
}

val stu2 = Student("Tom", 21, "S002")
stu2.getInfo()

```


---

```scala
class Calculator
{
  def calculate(a:Int,b:Int,signal:Char): Int = 
  {
    signal match 
    {
      case '+' => a + b
      case '-' => a - b
      case '*' => a * b
      case '/' => a / b
      //除法加入分母判断
      /*
      if (y != 0) x / y 
        else throw new ArithmeticException("Division by zero")
      case _ => throw new IllegalArgumentException("Invalid operator")
	  */
    }
  }
}

// 测试代码
println(Calculator.calculate(10, 5, '+')) 
println(Calculator.calculate(10, 5, '-'))
println(Calculator.calculate(10, 5, '*'))
println(Calculator.calculate(10, 5, '/'))
```

## 存在的问题
- **静态调用错误**：你在调用 `Calculator.calculate(10, 5, '+')` 时，直接用类名 `Calculator` 调用了 `calculate` 方法。但是 `Calculator` 是一个普通类，不是对象或静态类，所以需要实例化才能调用 `calculate` 方法。
- **分母为零的检查**：在使用除法时没有检查分母是否为零，可以添加一个分母为零的判断。

## 修改后的代码
```scala
class Calculator {
  def calculate(a: Int, b: Int, signal: Char): Int = {
    signal match {
      case '+' => a + b
      case '-' => a - b
      case '*' => a * b
      case '/' => 
        if (b != 0) a / b 
        else throw new ArithmeticException("Division by zero")
      case _ => throw new IllegalArgumentException("Invalid operator")
    }
  }
}

// 实例化对象
val calculator = new Calculator

// 测试代码
println(calculator.calculate(10, 5, '+')) 
println(calculator.calculate(10, 5, '-'))
println(calculator.calculate(10, 5, '*'))
println(calculator.calculate(10, 5, '/'))



```