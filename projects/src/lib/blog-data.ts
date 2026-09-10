export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  content: string;
  isPractice: boolean;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  icon: string;
}

export const categories: Category[] = [
  { name: '基础语法', slug: 'basics', count: 8, icon: 'syntax' },
  { name: '数据结构', slug: 'data-structures', count: 2, icon: 'structure' },
  { name: '面向对象', slug: 'oop', count: 2, icon: 'class' },
  { name: '实战练习', slug: 'practice', count: 2, icon: 'code' },
  { name: '标准库', slug: 'stdlib', count: 1, icon: 'library' },
];

export const allTags = [
  'Python', '列表', '字典', '类', '装饰器', '生成器',
  '文件操作', '异常处理', '算法', '排序', '递归',
  '迭代器', 'lambda', '模块', '面向对象',
  '变量', '数据类型', '控制流', '函数', '字符串', '循环',
];

export const articles: BlogArticle[] = [
  {
    id: '10',
    title: 'Python 变量与数据类型：编程的第一步',
    slug: 'variables-and-types',
    summary: '变量是编程的基石，数据类型决定了数据的存储方式。本文从最基础的变量赋值讲起，系统介绍 Python 的内置数据类型、类型转换和类型检查方法。',
    category: '基础语法',
    tags: ['Python', '变量', '数据类型'],
    date: '2024-12-20',
    readTime: 8,
    isPractice: true,
    content: `## 什么是变量

变量是用来存储数据的容器。在 Python 中，你不需要声明变量类型，Python 会自动推断。

\`\`\`python
# 变量赋值
name = "Alice"       # 字符串
age = 25             # 整数
height = 1.68        # 浮点数
is_student = True    # 布尔值

# 查看变量类型
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>
print(type(is_student))  # <class 'bool'>
\`\`\`

## Python 基本数据类型

### 数字类型

\`\`\`python
# 整数 (int)
count = 42
negative = -10
big_number = 1_000_000  # 下划线分隔，提高可读性

# 浮点数 (float)
pi = 3.14159
temperature = -5.5
scientific = 2.5e3  # 科学计数法，等于 2500.0

# 复数 (complex)
z = 3 + 4j
print(z.real)  # 3.0
print(z.imag)  # 4.0
\`\`\`

### 字符串 (str)

\`\`\`python
# 字符串创建
single = 'Hello'
double = "World"
multi = """这是
多行字符串"""

# 字符串操作
greeting = "Hello" + " " + "Python"  # 拼接
repeat = "Ha" * 3                     # 重复: "HaHaHa"
length = len(greeting)                # 长度: 13

# 字符串格式化
name = "Alice"
age = 25

# f-string (推荐，Python 3.6+)
print(f"我叫{name}，今年{age}岁")

# format 方法
print("我叫{}，今年{}岁".format(name, age))

# % 格式化 (旧式)
print("我叫%s，今年%d岁" % (name, age))
\`\`\`

### 布尔值 (bool)

\`\`\`python
is_valid = True
is_empty = False

# 布尔运算
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# 真值测试：以下值为 False
print(bool(0))         # False
print(bool(""))        # False
print(bool(None))      # False
print(bool([]))        # False

# 以下值为 True
print(bool(1))         # True
print(bool("hello"))   # True
print(bool([1, 2]))    # True
\`\`\`

### None 类型

\`\`\`python
# None 表示"没有值"
result = None
print(result)          # None
print(type(result))    # <class 'NoneType'>

# 常用于函数默认返回值
def do_nothing():
    pass

print(do_nothing())    # None
\`\`\`

## 类型转换

\`\`\`python
# 字符串转数字
num_str = "42"
num = int(num_str)     # 42
pi_str = "3.14"
pi = float(pi_str)     # 3.14

# 数字转字符串
age = 25
age_str = str(age)     # "25"

# 其他转布尔
print(bool(0))         # False
print(bool(42))        # True
print(bool(""))        # False
print(bool("hello"))   # True

# 注意：无法转换的会报错
# int("hello")  # ValueError!
\`\`\`

## 多重赋值与交换

\`\`\`python
# 同时赋值多个变量
x, y, z = 1, 2, 3

# 相同值赋给多个变量
a = b = c = 0

# 优雅地交换变量
x, y = 10, 20
x, y = y, x  # 不需要临时变量！
print(x, y)  # 20, 10
\`\`\`

## 变量命名规范

\`\`\`python
# 推荐：snake_case
user_name = "Alice"
max_retry_count = 3

# 不推荐
userName = "Alice"      # 驼峰命名（Java 风格）
X = 10                  # 单字母大写（通常用于常量）

# 常量约定（全大写）
MAX_SIZE = 100
PI = 3.14159
DEFAULT_TIMEOUT = 30

# 私有变量约定（下划线前缀）
_internal_data = []
\`\`\`

> **练习**：
> 1. 创建变量存储你的姓名、年龄、身高，并打印它们的类型
> 2. 将字符串 "2024" 转为整数，加上 1 后再转回字符串
> 3. 用 f-string 格式化输出："我叫 xxx，明年 xx 岁"`,
  },
  {
    id: '11',
    title: 'Python 控制流：条件判断与循环详解',
    slug: 'control-flow',
    summary: '控制流是程序执行顺序的决定者。本文全面讲解 if/elif/else 条件判断、for/while 循环、break/continue 控制，以及 match-case 模式匹配。',
    category: '基础语法',
    tags: ['Python', '控制流', '循环'],
    date: '2024-12-19',
    readTime: 10,
    isPractice: true,
    content: `## 条件判断 (if/elif/else)

\`\`\`python
# 基本 if 语句
age = 18

if age >= 18:
    print("成年人")
elif age >= 12:
    print("青少年")
else:
    print("儿童")

# 三元表达式（条件表达式）
status = "成年" if age >= 18 else "未成年"
print(status)

# 多条件组合
score = 85
attendance = 0.9

if score >= 80 and attendance >= 0.8:
    print("优秀学生")
elif score >= 60 or attendance >= 0.9:
    print("合格")
else:
    print("需要努力")
\`\`\`

## for 循环

\`\`\`python
# 遍历列表
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# range() 函数
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):      # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (步长2)
    print(i)

# enumerate() 带索引遍历
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")

# zip() 并行遍历
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
\`\`\`

## while 循环

\`\`\`python
# 基本 while 循环
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# 用户输入验证
password = ""
while password != "python123":
    password = input("请输入密码: ")
print("登录成功！")

# 无限循环（需要 break 退出）
while True:
    command = input("> ")
    if command == "quit":
        break
    print(f"执行: {command}")
\`\`\`

## break 与 continue

\`\`\`python
# break：跳出整个循环
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue：跳过当前迭代
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 1, 3, 5, 7, 9 (只打印奇数)

# for-else：循环正常结束时执行 else
for i in range(2, 10):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        # 循环没有被 break 中断时执行
        print(f"{i} 是质数")
\`\`\`

## 嵌套循环

\`\`\`python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}x{i}={i*j}", end="\\t")
    print()  # 换行

# 图案打印（三角形）
n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)
#     *
#    * *
#   * * *
#  * * * *
# * * * * *
\`\`\`

## match-case（Python 3.10+）

\`\`\`python
# 模式匹配（类似 switch-case）
def handle_command(command):
    match command:
        case "start":
            print("启动程序")
        case "stop" | "exit":
            print("停止程序")
        case "pause":
            print("暂停")
        case _:
            print("未知命令")

handle_command("start")  # 启动程序
handle_command("exit")   # 停止程序
handle_command("hello")  # 未知命令

# 带条件的模式匹配
def check_status(code):
    match code:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500 | 502 | 503:
            return "Server Error"
        case c if c < 300:
            return "Success"
        case _:
            return "Unknown"
\`\`\`

> **练习**：
> 1. 用 for 循环计算 1 到 100 的偶数之和
> 2. 用 while 循环实现猜数字游戏（1-100 随机数，提示大了/小了）
> 3. 用嵌套循环打印菱形图案`,
  },
  {
    id: '12',
    title: 'Python 函数：代码复用的基石',
    slug: 'python-functions',
    summary: '函数是组织代码的基本单元。本文从函数定义讲起，深入讲解参数传递、返回值、作用域、闭包等核心概念，帮你写出清晰可复用的代码。',
    category: '基础语法',
    tags: ['Python', '函数', 'lambda'],
    date: '2024-12-18',
    readTime: 12,
    isPractice: true,
    content: `## 定义与调用函数

\`\`\`python
# 基本函数定义
def greet(name):
    """向用户打招呼（这是文档字符串）"""
    return f"Hello, {name}!"

# 调用函数
message = greet("Alice")
print(message)  # Hello, Alice!

# 查看文档字符串
print(greet.__doc__)  # 向用户打招呼
\`\`\`

## 参数类型

### 位置参数与关键字参数

\`\`\`python
def introduce(name, age, city="Unknown"):
    print(f"我是{name}，{age}岁，来自{city}")

# 位置参数
introduce("Alice", 25)

# 关键字参数
introduce(name="Bob", age=30, city="Beijing")

# 混合使用（位置参数必须在关键字参数前面）
introduce("Charlie", city="Shanghai", age=28)
\`\`\`

### 默认参数

\`\`\`python
# 默认参数值
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9 (3^2)
print(power(3, 3))   # 27 (3^3)

# 注意：默认参数不要用可变对象！
# 错误示例
def append_to(element, lst=[]):  # 危险！
    lst.append(element)
    return lst

# 正确做法
def append_to_safe(element, lst=None):
    if lst is None:
        lst = []
    lst.append(element)
    return lst
\`\`\`

### 可变参数

\`\`\`python
# *args：接收任意数量的位置参数
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))       # 6
print(sum_all(1, 2, 3, 4, 5)) # 15

# **kwargs：接收任意数量的关键字参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="Beijing")

# 混合使用
def example(a, b, *args, **kwargs):
    print(f"a={a}, b={b}")
    print(f"args={args}")
    print(f"kwargs={kwargs}")

example(1, 2, 3, 4, name="test", value=100)
\`\`\`

## 返回值

\`\`\`python
# 返回多个值（实际是返回元组）
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"最小值: {lo}, 最大值: {hi}")

# 没有 return 或 return 后无值，返回 None
def do_nothing():
    pass

result = do_nothing()
print(result)  # None

# 提前返回
def absolute(value):
    if value < 0:
        return -value
    return value
\`\`\`

## 作用域 (LEGB 规则)

\`\`\`python
# Local -> Enclosing -> Global -> Built-in

x = "global"  # 全局变量

def outer():
    x = "enclosing"  # 外层函数变量

    def inner():
        x = "local"  # 局部变量
        print(f"inner: {x}")

    inner()
    print(f"outer: {x}")

outer()
print(f"global: {x}")

# 修改全局变量
count = 0

def increment():
    global count
    count += 1

increment()
print(count)  # 1

# 修改外层函数变量
def counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
    inc()
    inc()
    return count

print(counter())  # 2
\`\`\`

## lambda 匿名函数

\`\`\`python
# lambda 语法：lambda 参数: 表达式
square = lambda x: x ** 2
print(square(5))  # 25

# 多参数
add = lambda a, b: a + b
print(add(3, 4))  # 7

# 常与 sorted/map/filter 搭配使用
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78},
]

# 按分数排序
sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)
for s in sorted_students:
    print(f"{s['name']}: {s['score']}")

# map：对每个元素应用函数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter：过滤元素
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]
\`\`\`

## 类型注解（Type Hints）

\`\`\`python
# Python 3.5+ 支持类型注解
def greet(name: str) -> str:
    return f"Hello, {name}!"

def calculate(a: int | float, b: int | float) -> float:
    return float(a + b)

from typing import Optional

def find_user(user_id: int) -> Optional[dict]:
    """可能返回字典或 None"""
    users = {1: {"name": "Alice"}, 2: {"name": "Bob"}}
    return users.get(user_id)
\`\`\`

> **练习**：
> 1. 写一个函数 \`is_palindrome(s)\`，判断字符串是否是回文
> 2. 写一个函数 \`flatten(lst)\`，将嵌套列表展平为一维列表
> 3. 用 lambda 和 sorted 对学生列表按多条件排序（先按分数降序，分数相同按姓名升序）`,
  },
  {
    id: '13',
    title: 'Python 字符串操作完全指南',
    slug: 'string-operations',
    summary: '字符串是 Python 中最常用的数据类型之一。本文全面梳理字符串的创建、切片、查找、替换、分割、格式化等操作，附带大量实用示例。',
    category: '基础语法',
    tags: ['Python', '字符串'],
    date: '2024-12-17',
    readTime: 10,
    isPractice: true,
    content: `## 字符串基础

\`\`\`python
# 创建字符串
s1 = 'Hello'
s2 = "World"
s3 = """多行
字符串"""
s4 = r"原始字符串 \\n 不转义"
s5 = b"字节字符串"

# 字符串是不可变的
s = "Hello"
# s[0] = "h"  # TypeError!
s = "h" + s[1:]  # 正确方式
\`\`\`

## 索引与切片

\`\`\`python
text = "Hello, Python!"

# 索引（从0开始）
print(text[0])    # H
print(text[-1])   # !

# 切片 [start:stop:step]
print(text[0:5])    # Hello
print(text[7:])     # Python!
print(text[:5])     # Hello
print(text[::2])    # Hlo yhn（步长2）
print(text[::-1])   # !nohtyP ,olleH（反转）
\`\`\`

## 常用方法

### 大小写转换

\`\`\`python
text = "hello world"

print(text.upper())         # HELLO WORLD
print(text.lower())         # hello world
print(text.title())         # Hello World
print(text.capitalize())    # Hello world
print(text.swapcase())      # HELLO WORLD
\`\`\`

### 查找与替换

\`\`\`python
text = "Hello, World! Hello, Python!"

# 查找
print(text.find("Hello"))       # 0（首次出现位置）
print(text.find("xyz"))         # -1（未找到）
print(text.index("Hello"))      # 0（未找到会报错）
print(text.count("Hello"))      # 2（出现次数）
print(text.startswith("Hello")) # True
print(text.endswith("!"))       # True

# 替换
print(text.replace("Hello", "Hi"))  # Hi, World! Hi, Python!
print(text.replace("Hello", "Hi", 1))  # 只替换第一次
\`\`\`

### 分割与连接

\`\`\`python
# 分割
csv_line = "Alice,25,Beijing"
parts = csv_line.split(",")
print(parts)  # ['Alice', '25', 'Beijing']

sentence = "Hello World Python"
words = sentence.split()  # 默认按空白分割
print(words)  # ['Hello', 'World', 'Python']

# 分割限制
text = "a:b:c:d"
print(text.split(":", maxsplit=2))  # ['a', 'b', 'c:d']

# 连接（split 的逆操作）
words = ["Hello", "World", "Python"]
result = " ".join(words)
print(result)  # Hello World Python

# 用分隔符连接
path = "/".join(["usr", "local", "bin"])
print(path)  # usr/local/bin
\`\`\`

### 去除空白

\`\`\`python
text = "  Hello World  "

print(text.strip())    # "Hello World"（去两端）
print(text.lstrip())   # "Hello World  "（去左边）
print(text.rstrip())   # "  Hello World"（去右边）

# 去除指定字符
url = "https://example.com///"
print(url.rstrip("/"))  # https://example.com
\`\`\`

### 判断类方法

\`\`\`python
print("123".isdigit())     # True（全是数字）
print("abc".isalpha())     # True（全是字母）
print("abc123".isalnum())  # True（字母或数字）
print("hello".islower())   # True（全小写）
print("HELLO".isupper())   # True（全大写）
print("Hello World".istitle())  # True（标题格式）
print("   ".isspace())     # True（全是空白）
print("valid_name".isidentifier())  # True（合法标识符）
\`\`\`

## 字符串格式化进阶

\`\`\`python
name = "Alice"
age = 25
score = 95.678

# f-string 进阶
# 数值格式化
print(f"分数: {score:.2f}")       # 95.68（保留2位小数）
print(f"百分比: {score/100:.1%}") # 95.7%
print(f"千分位: {1234567:,}")     # 1,234,567
print(f"补零: {42:05d}")          # 00042

# 对齐
print(f"{'左对齐':<10}|")   # 左对齐     |
print(f"{'右对齐':>10}|")   #      右对齐|
print(f"{'居中':^10}|")     #    居中    |

# 表达式
print(f"{2 + 3 = }")  # 2 + 3 = 5（调试利器）
\`\`\`

## 实用技巧

\`\`\`python
# 多行字符串保持缩进
import textwrap

long_text = """
    这是一段很长的文本，
    可能需要格式化处理后使用。
"""
clean_text = textwrap.dedent(long_text).strip()

# 字符串翻译表
text = "hello world"
table = str.maketrans("aeiou", "12345")
print(text.translate(table))  # h2ll4 w4rld

# 检查多个前缀/后缀
filename = "report_2024.pdf"
print(filename.endswith((".pdf", ".doc", ".txt")))  # True
\`\`\`

> **练习**：
> 1. 写一个函数，统计字符串中元音字母和辅音字母的数量
> 2. 实现一个简单的 Caesar 密码（字母移位加密）
> 3. 将 "hello-world-python" 转为 "HelloWorldPython"（驼峰命名）`,
  },
  {
    id: '14',
    title: 'Python 模块与包：代码组织的艺术',
    slug: 'modules-and-packages',
    summary: '当代码量增长时，合理的模块化组织至关重要。本文讲解 import 机制、自定义模块、包结构、__init__.py 的作用，以及虚拟环境的使用。',
    category: '基础语法',
    tags: ['Python', '模块'],
    date: '2024-12-16',
    readTime: 9,
    isPractice: false,
    content: `## import 机制

\`\`\`python
# 导入整个模块
import math
print(math.pi)       # 3.141592653589793
print(math.sqrt(16)) # 4.0

# 导入特定内容
from math import pi, sqrt
print(pi)    # 3.141592653589793
print(sqrt(16))  # 4.0

# 别名导入
import numpy as np
from datetime import datetime as dt

# 导入所有（不推荐）
from math import *
\`\`\`

## 自定义模块

\`\`\`python
# myutils.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159

# 在另一个文件中使用
# main.py
import myutils

print(myutils.greet("Alice"))
print(myutils.add(1, 2))
print(myutils.PI)
\`\`\`

## __name__ 与 __main__

\`\`\`python
# calculator.py
def add(a, b):
    return a + b

def main():
    result = add(3, 5)
    print(f"3 + 5 = {result}")

# 只有直接运行时才执行，被导入时不执行
if __name__ == "__main__":
    main()
\`\`\`

## 包的结构

\`\`\`python
# 目录结构
# mypackage/
#     __init__.py
#     module1.py
#     module2.py
#     subpackage/
#         __init__.py
#         module3.py

# __init__.py 可以控制包的公共接口
# mypackage/__init__.py
from .module1 import func1
from .module2 import func2

# 使用时
import mypackage
mypackage.func1()  # 直接访问，不需要指定模块名
\`\`\`

## 常用标准库模块

\`\`\`python
# os - 操作系统接口
import os
print(os.getcwd())           # 当前目录
print(os.listdir("."))       # 列出目录
os.makedirs("new/dir", exist_ok=True)

# sys - 系统相关
import sys
print(sys.version)           # Python 版本
print(sys.path)              # 模块搜索路径
print(sys.argv)              # 命令行参数

# random - 随机数
import random
print(random.randint(1, 10))       # 随机整数
print(random.choice(["a", "b", "c"]))  # 随机选择
items = [1, 2, 3, 4, 5]
random.shuffle(items)              # 打乱列表

# datetime - 日期时间
from datetime import datetime, timedelta
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))
tomorrow = now + timedelta(days=1)

# json - JSON 处理
import json
data = {"name": "Alice", "age": 25}
json_str = json.dumps(data, ensure_ascii=False, indent=2)
parsed = json.loads(json_str)
\`\`\`

## 第三方包管理 (pip)

\`\`\`bash
# 安装包
pip install requests
pip install requests==2.31.0  # 指定版本

# 卸载
pip uninstall requests

# 查看已安装
pip list
pip show requests

# 导出依赖
pip freeze > requirements.txt

# 从文件安装
pip install -r requirements.txt
\`\`\`

## 虚拟环境

\`\`\`bash
# 创建虚拟环境
python -m venv myenv

# 激活（Linux/Mac）
source myenv/bin/activate

# 激活（Windows）
myenv\\Scripts\\activate

# 退出
deactivate
\`\`\`

> **练习**：
> 1. 创建一个自定义模块 \`string_utils.py\`，包含反转字符串、统计词频、检测回文三个函数
> 2. 使用 \`random\` 和 \`string\` 模块生成一个 8 位随机密码（含大小写字母和数字）
> 3. 用 \`datetime\` 模块计算你出生至今活了多少天`,
  },
  {
    id: '1',
    title: 'Python 列表推导式：优雅的数据转换',
    slug: 'list-comprehension',
    summary: '列表推导式是 Python 最具特色的语法之一，用一行代码替代多行循环，让数据转换变得简洁优雅。本文通过多个实例带你掌握列表推导式的各种用法。',
    category: '基础语法',
    tags: ['Python', '列表', 'lambda'],
    date: '2024-12-15',
    readTime: 8,
    isPractice: true,
    content: `## 什么是列表推导式

列表推导式（List Comprehension）是 Python 中一种简洁的创建列表的方式。它的基本语法结构为：

\`\`\`python
[expression for item in iterable if condition]
\`\`\`

这种写法可以用一行代码替代传统的 for 循环，使代码更加简洁和可读。

## 基础用法

### 简单的数值转换

\`\`\`python
# 传统写法
squares = []
for x in range(10):
    squares.append(x ** 2)

# 列表推导式
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

### 带条件过滤

\`\`\`python
# 只保留偶数的平方
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# 过滤空字符串
names = ['Alice', '', 'Bob', None, 'Charlie']
valid_names = [name for name in names if name and name.strip()]
print(valid_names)  # ['Alice', 'Bob', 'Charlie']
\`\`\`

## 进阶用法

### 嵌套推导式

\`\`\`python
# 矩阵转置
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
transposed = [[row[i] for row in matrix] for i in range(3)]
print(transposed)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

# 展平二维列表
nested = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in nested for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6]
\`\`\`

### 字典推导式

\`\`\`python
# 创建字典
word = 'hello'
char_count = {char: word.count(char) for char in set(word)}
print(char_count)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}

# 交换键值
original = {'a': 1, 'b': 2, 'c': 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}
\`\`\`

## 练习题

> 尝试用列表推导式完成以下任务：
> 1. 生成 1-100 中所有能被 3 整除但不能被 5 整除的数
> 2. 将字符串列表中的每个字符串转为大写并去除空格
> 3. 用嵌套推导式生成九九乘法表

列表推导式虽然强大，但要注意**可读性**。如果表达式过于复杂，建议使用普通的 for 循环或提取为函数。记住 Python 的设计哲学：**简洁优于复杂，可读优于简洁**。`,
  },
  {
    id: '2',
    title: '深入理解 Python 装饰器',
    slug: 'python-decorators',
    summary: '装饰器是 Python 的高级特性之一，它允许在不修改原函数的情况下扩展函数功能。本文从函数是一等公民讲起，逐步深入装饰器的原理和实际应用。',
    category: '面向对象',
    tags: ['Python', '装饰器', '面向对象'],
    date: '2024-12-12',
    readTime: 12,
    isPractice: false,
    content: `## 理解装饰器的前提

在 Python 中，**函数是一等公民**（first-class citizen），这意味着函数可以：
- 赋值给变量
- 作为参数传递给其他函数
- 作为其他函数的返回值
- 定义在其他函数内部

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

# 函数赋值给变量
say_hello = greet
print(say_hello("Alice"))  # Hello, Alice!

# 函数作为参数
def call_func(func, arg):
    return func(arg)

print(call_func(greet, "Bob"))  # Hello, Bob!
\`\`\`

## 装饰器的本质

装饰器本质上是一个**接收函数并返回函数**的高阶函数。

\`\`\`python
import time
import functools

def timer(func):
    """计算函数执行时间的装饰器"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"[{func.__name__}] 执行耗时: {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function(n):
    """模拟耗时操作"""
    total = sum(i ** 2 for i in range(n))
    return total

result = slow_function(1_000_000)
# [slow_function] 执行耗时: 0.0523s
\`\`\`

## 带参数的装饰器

\`\`\`python
def retry(max_attempts=3, delay=1):
    """带重试机制的装饰器"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"第 {attempt + 1} 次尝试失败: {e}")
                    time.sleep(delay)
        return wrapper
    return decorator

@retry(max_attempts=3, delay=2)
def fetch_data(url):
    import requests
    response = requests.get(url, timeout=5)
    response.raise_for_status()
    return response.json()
\`\`\`

## 常用装饰器模式

### 缓存装饰器

\`\`\`python
def cache(func):
    """简单的缓存装饰器"""
    memo = {}
    @functools.wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # 瞬间得出结果
\`\`\`

> **练习**：尝试实现一个 \`@validate_types\` 装饰器，在函数调用前检查参数类型是否符合注解声明。

\`functools.wraps\` 的使用非常重要，它保留了原函数的元信息（\`__name__\`、\`__doc__\` 等），在调试和文档生成时不可或缺。`,
  },
  {
    id: '3',
    title: 'Python 字典的高级操作与性能优化',
    slug: 'dict-advanced',
    summary: '字典是 Python 中最常用的数据结构之一。本文深入探讨字典的高级操作技巧，包括 defaultdict、Counter、合并操作以及性能优化策略。',
    category: '数据结构',
    tags: ['Python', '字典', '算法'],
    date: '2024-12-10',
    readTime: 10,
    isPractice: true,
    content: `## 字典基础回顾

Python 字典（dict）是基于**哈希表**实现的，查找、插入、删除的平均时间复杂度都是 O(1)。

\`\`\`python
# 基本操作
user = {"name": "Alice", "age": 25, "city": "Beijing"}
print(user["name"])        # Alice
print(user.get("email", "N/A"))  # N/A (安全访问)

# Python 3.7+ 字典保持插入顺序
for key, value in user.items():
    print(f"{key}: {value}")
\`\`\`

## defaultdict

\`\`\`python
from collections import defaultdict

# 分组操作
students = [
    {"name": "Alice", "grade": "A"},
    {"name": "Bob", "grade": "B"},
    {"name": "Charlie", "grade": "A"},
    {"name": "David", "grade": "C"},
    {"name": "Eve", "grade": "B"},
]

grade_groups = defaultdict(list)
for student in students:
    grade_groups[student["grade"]].append(student["name"])

print(dict(grade_groups))
# {'A': ['Alice', 'Charlie'], 'B': ['Bob', 'Eve'], 'C': ['David']}
\`\`\`

## Counter

\`\`\`python
from collections import Counter

# 词频统计
text = "the quick brown fox jumps over the lazy dog the fox"
words = text.split()
word_count = Counter(words)

print(word_count.most_common(3))
# [('the', 3), ('fox', 2), ('quick', 1)]

# Counter 运算
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print(c1 + c2)  # Counter(a=4, b=3)
print(c1 - c2)  # Counter(a=2)
\`\`\`

## 字典合并（Python 3.9+）

\`\`\`python
defaults = {"color": "blue", "size": "medium", "style": "normal"}
user_prefs = {"color": "red", "size": "large"}

# 使用 | 运算符合并
merged = defaults | user_prefs
print(merged)  # {'color': 'red', 'size': 'large', 'style': 'normal'}

# 使用 |= 就地更新
defaults |= user_prefs
\`\`\`

## 性能优化技巧

\`\`\`python
import timeit

# 1. 使用 get() 代替 try-except
# 快约 30%
value = my_dict.get(key, default)

# 2. 使用 setdefault 避免重复查找
# 不推荐（每次都会计算默认值）
my_dict.setdefault(key, []).append(value)

# 推荐 defaultdict
my_dict = defaultdict(list)
my_dict[key].append(value)

# 3. 字典视图对象的高效操作
keys_view = my_dict.keys()
# 集合运算
common_keys = dict1.keys() & dict2.keys()
unique_to_dict1 = dict1.keys() - dict2.keys()
\`\`\`

> **练习**：使用 \`Counter\` 和 \`defaultdict\` 实现一个简单的文本分析器，统计文章中每个单词出现的频率，并按频率排序输出 Top 10。`,
  },
  {
    id: '4',
    title: 'Python 生成器与迭代器：惰性求值的艺术',
    slug: 'generators-iterators',
    summary: '生成器是 Python 中实现惰性求值的核心工具，它让你能够处理无限序列和大规模数据而不会耗尽内存。本文详解 yield 的工作原理和实际应用场景。',
    category: '基础语法',
    tags: ['Python', '生成器', '迭代器'],
    date: '2024-12-08',
    readTime: 10,
    isPractice: false,
    content: `## 迭代器协议

Python 的迭代器协议要求对象实现两个方法：
- \`__iter__()\`：返回迭代器对象本身
- \`__next__()\`：返回下一个值，没有更多值时抛出 \`StopIteration\`

\`\`\`python
class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for num in CountDown(5):
    print(num)  # 5, 4, 3, 2, 1
\`\`\`

## 生成器函数

\`\`\`python
def fibonacci():
    """无限斐波那契数列生成器"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 只取前 10 个
import itertools
first_10 = list(itertools.islice(fibonacci(), 10))
print(first_10)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

## 生成器表达式

\`\`\`python
# 列表推导式 vs 生成器表达式
# 列表：立即计算所有值，占用内存
squares_list = [x ** 2 for x in range(10_000_000)]  # 占用大量内存

# 生成器：惰性计算，几乎不占内存
squares_gen = (x ** 2 for x in range(10_000_000))  # 几乎不占内存

# 处理大文件
def read_large_file(filepath):
    with open(filepath, 'r') as f:
        for line in f:
            yield line.strip()

# 逐行处理，不会一次性加载整个文件
for line in read_large_file('huge_data.txt'):
    process(line)
\`\`\`

## yield from 与子生成器

\`\`\`python
def flatten(nested):
    """递归展平嵌套列表"""
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

data = [1, [2, 3], [4, [5, 6]], 7]
print(list(flatten(data)))  # [1, 2, 3, 4, 5, 6, 7]
\`\`\`

## 实际应用：管道模式

\`\`\`python
def read_files(file_list):
    for filepath in file_list:
        with open(filepath) as f:
            yield from f

def filter_lines(lines, keyword):
    for line in lines:
        if keyword in line:
            yield line

def count_lines(lines):
    count = 0
    for _ in lines:
        count += 1
    return count

# 组合成管道
files = ['log1.txt', 'log2.txt', 'log3.txt']
pipeline = count_lines(
    filter_lines(
        read_files(files),
        keyword='ERROR'
    )
)
\`\`\`

> **练习**：实现一个生成器 \`chunked(iterable, size)\`，将任意可迭代对象按指定大小分块产出。`,
  },
  {
    id: '5',
    title: 'Python 异常处理最佳实践',
    slug: 'exception-handling',
    summary: '良好的异常处理是编写健壮 Python 代码的关键。本文介绍异常层次结构、自定义异常、上下文管理器以及异常处理的设计模式。',
    category: '基础语法',
    tags: ['Python', '异常处理'],
    date: '2024-12-05',
    readTime: 9,
    isPractice: true,
    content: `## 异常层次结构

Python 的异常都继承自 \`BaseException\`，常用异常继承自 \`Exception\`：

\`\`\`python
# BaseException
# ├── SystemExit
# ├── KeyboardInterrupt
# ├── GeneratorExit
# └── Exception
#     ├── ValueError
#     ├── TypeError
#     ├── KeyError
#     ├── IndexError
#     ├── FileNotFoundError
#     └── ... (自定义异常也应继承 Exception)
\`\`\`

## 正确的异常处理模式

\`\`\`python
# 推荐：精确捕获
def parse_config(filepath):
    try:
        with open(filepath) as f:
            import json
            return json.load(f)
    except FileNotFoundError:
        print(f"配置文件不存在: {filepath}")
        return {}
    except json.JSONDecodeError as e:
        print(f"配置文件格式错误: {e}")
        raise ValueError(f"无效的配置格式") from e

# 不推荐：过于宽泛的捕获
try:
    do_something()
except Exception:  # 太宽泛！
    pass  # 吞掉所有异常，难以调试
\`\`\`

## 自定义异常

\`\`\`python
class AppError(Exception):
    """应用基础异常"""
    pass

class ValidationError(AppError):
    """数据验证异常"""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"字段 '{field}': {message}")

class NotFoundError(AppError):
    """资源未找到异常"""
    def __init__(self, resource, id):
        self.resource = resource
        self.id = id
        super().__init__(f"{resource} (id={id}) 不存在")

# 使用
def get_user(user_id):
    user = db.find(user_id)
    if not user:
        raise NotFoundError("User", user_id)
    return user

try:
    user = get_user(42)
except NotFoundError as e:
    print(e)  # User (id=42) 不存在
\`\`\`

## 上下文管理器与异常

\`\`\`python
from contextlib import contextmanager

@contextmanager
def transaction(db):
    """数据库事务上下文"""
    try:
        yield db
        db.commit()
    except Exception:
        db.rollback()
        raise

# 使用
with transaction(db) as conn:
    conn.execute("INSERT INTO users ...")
    conn.execute("UPDATE accounts ...")
    # 如果任何一步失败，自动回滚
\`\`\`

## EAFP vs LBYL

\`\`\`python
# EAFP (Easier to Ask Forgiveness than Permission) - Python 风格
try:
    value = my_dict[key]
except KeyError:
    value = default_value

# LBYL (Look Before You Leap)
if key in my_dict:
    value = my_dict[key]
else:
    value = default_value

# Python 推荐 EAFP 风格
# 但要注意：不要捕获不该捕获的异常
\`\`\`

> **练习**：为一个文件上传功能设计异常体系，包括 \`FileSizeExceededError\`、\`InvalidFileTypeError\`、\`UploadTimeoutError\`，并实现相应的处理逻辑。`,
  },
  {
    id: '6',
    title: 'Python 面向对象：从类到设计模式',
    slug: 'python-oop-patterns',
    summary: 'Python 的面向对象系统灵活而强大。本文从类的基本特性出发，探讨 property、slots、抽象基类等高级特性，以及常见的 Python 设计模式。',
    category: '面向对象',
    tags: ['Python', '面向对象', '类'],
    date: '2024-12-02',
    readTime: 15,
    isPractice: false,
    content: `## dataclass：现代 Python 的数据类

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    label: str = "origin"

    @property
    def distance_from_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

p1 = Point(3.0, 4.0, "A")
print(p1)  # Point(x=3.0, y=4.0, label='A')
print(p1.distance_from_origin)  # 5.0
\`\`\`

## __slots__ 优化内存

\`\`\`python
# 普通类每个实例都有 __dict__，占用额外内存
class RegularPoint:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# 使用 __slots__ 禁止动态属性，节省约 40-50% 内存
class OptimizedPoint:
    __slots__ = ('x', 'y')

    def __init__(self, x, y):
        self.x = x
        self.y = y

# 百万级对象时差异显著
import sys
regular = RegularPoint(1, 2)
optimized = OptimizedPoint(1, 2)
print(sys.getsizeof(regular))    # ~152 bytes
print(sys.getsizeof(optimized))  # ~56 bytes
\`\`\`

## 抽象基类

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        """计算面积"""
        ...

    @abstractmethod
    def perimeter(self) -> float:
        """计算周长"""
        ...

    def __str__(self):
        return f"{self.__class__.__name__}(area={self.area():.2f})"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Circle() 可以实例化
# Shape() 会报 TypeError: 不能实例化抽象类
\`\`\`

## 设计模式示例

### 单例模式

\`\`\`python
class DatabaseConnection:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, host="localhost", port=5432):
        if not hasattr(self, 'initialized'):
            self.host = host
            self.port = port
            self.initialized = True
\`\`\`

### 观察者模式

\`\`\`python
from typing import Protocol, Callable

class Observer(Protocol):
    def update(self, event: str, data: dict) -> None:
        ...

class EventBus:
    def __init__(self):
        self._listeners: dict[str, list[Callable]] = {}

    def on(self, event: str, callback: Callable):
        self._listeners.setdefault(event, []).append(callback)

    def emit(self, event: str, data: dict = None):
        for callback in self._listeners.get(event, []):
            callback(event, data or {})

# 使用
bus = EventBus()
bus.on("user_login", lambda e, d: print(f"User {d['name']} logged in"))
bus.emit("user_login", {"name": "Alice"})
\`\`\`

> **练习**：使用抽象基类和 dataclass 实现一个简单的形状计算器，支持 Circle、Rectangle、Triangle，并计算它们的面积和周长。`,
  },
  {
    id: '7',
    title: '实战：用 Python 实现排序算法可视化',
    slug: 'sorting-algorithms',
    summary: '通过实现经典排序算法并记录每一步操作，深入理解算法原理。本文涵盖冒泡排序、快速排序、归并排序的实现与比较。',
    category: '实战练习',
    tags: ['Python', '算法', '排序'],
    date: '2024-11-28',
    readTime: 12,
    isPractice: true,
    content: `## 冒泡排序

\`\`\`python
def bubble_sort(arr):
    """冒泡排序 - O(n^2)"""
    n = len(arr)
    steps = []
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                steps.append(arr.copy())
        if not swapped:
            break
    return arr, steps

# 测试
data = [64, 34, 25, 12, 22, 11, 90]
sorted_data, steps = bubble_sort(data.copy())
print(f"排序结果: {sorted_data}")
print(f"共 {len(steps)} 步操作")
\`\`\`

## 快速排序

\`\`\`python
def quick_sort(arr, low=0, high=None):
    """快速排序 - O(n log n) 平均"""
    if high is None:
        high = len(arr) - 1

    if low < high:
        pivot_idx = partition(arr, low, high)
        quick_sort(arr, low, pivot_idx - 1)
        quick_sort(arr, pivot_idx + 1, high)
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
\`\`\`

## 归并排序

\`\`\`python
def merge_sort(arr):
    """归并排序 - O(n log n) 稳定"""
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

## 性能对比

\`\`\`python
import time
import random

def benchmark(sort_func, data):
    arr = data.copy()
    start = time.perf_counter()
    sort_func(arr)
    elapsed = time.perf_counter() - start
    return elapsed

sizes = [100, 1000, 5000]
for size in sizes:
    data = [random.randint(1, 10000) for _ in range(size)]
    print(f"\\n数据量: {size}")
    print(f"  冒泡排序: {benchmark(bubble_sort, data):.4f}s")
    print(f"  快速排序: {benchmark(quick_sort, data):.4f}s")
    print(f"  归并排序: {benchmark(merge_sort, data):.4f}s")
\`\`\`

> **练习**：实现堆排序（Heap Sort），并与以上三种算法进行性能对比。思考为什么 Python 内置的 \`sorted()\` 使用的是 Timsort 而不是快速排序？`,
  },
  {
    id: '8',
    title: 'Python 文件操作与路径处理完全指南',
    slug: 'file-operations',
    summary: '文件操作是编程中最基础也最重要的技能之一。本文涵盖 open 函数的各种模式、pathlib 的现代路径操作、以及 CSV/JSON 文件的读写技巧。',
    category: '标准库',
    tags: ['Python', '文件操作', '模块'],
    date: '2024-11-25',
    readTime: 10,
    isPractice: true,
    content: `## pathlib：现代路径操作

\`\`\`python
from pathlib import Path

# 创建路径对象
current = Path('.')
home = Path.home()
project = Path('/workspace/myproject')

# 路径拼接（使用 / 运算符）
config = project / 'config' / 'settings.json'
print(config)  # /workspace/myproject/config/settings.json

# 路径查询
print(config.exists())      # 是否存在
print(config.is_file())     # 是否是文件
print(config.is_dir())      # 是否是目录
print(config.suffix)        # .json
print(config.stem)          # settings
print(config.parent)        # /workspace/myproject/config
\`\`\`

## 文件读写最佳实践

\`\`\`python
# 推荐：使用 with 语句（自动关闭文件）
with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 逐行读取大文件
with open('large_file.log', 'r', encoding='utf-8') as f:
    for line in f:
        process(line.strip())

# 写入文件
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, World!\\n")
    f.writelines(["line 1\\n", "line 2\\n"])

# 追加模式
with open('log.txt', 'a', encoding='utf-8') as f:
    f.write("New log entry\\n")
\`\`\`

## JSON 文件操作

\`\`\`python
import json

# 写入 JSON
data = {
    "users": [
        {"name": "Alice", "age": 25},
        {"name": "Bob", "age": 30}
    ],
    "total": 2
}

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# 读取 JSON
with open('data.json', 'r', encoding='utf-8') as f:
    loaded = json.load(f)

print(loaded['users'][0]['name'])  # Alice
\`\`\`

## CSV 文件操作

\`\`\`python
import csv

# 写入 CSV
with open('users.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'age', 'city'])
    writer.writeheader()
    writer.writerows([
        {'name': 'Alice', 'age': 25, 'city': 'Beijing'},
        {'name': 'Bob', 'age': 30, 'city': 'Shanghai'},
    ])

# 读取 CSV
with open('users.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['name']} - {row['city']}")
\`\`\`

## 目录遍历

\`\`\`python
from pathlib import Path

# 遍历目录
src = Path('src')

# 所有 Python 文件
py_files = list(src.rglob('*.py'))
print(f"找到 {len(py_files)} 个 Python 文件")

# 按类型分组
from collections import defaultdict
by_ext = defaultdict(list)
for f in Path('.').rglob('*'):
    if f.is_file():
        by_ext[f.suffix].append(f)

for ext, files in sorted(by_ext.items()):
    print(f"{ext}: {len(files)} 个文件")
\`\`\`

> **练习**：编写一个脚本，扫描指定目录下所有 Python 文件，统计每个文件的代码行数、注释行数和空行数，并输出汇总报告。`,
  },
  {
    id: '9',
    title: '实战：用 Python 构建命令行待办事项工具',
    slug: 'cli-todo-app',
    summary: '通过构建一个完整的命令行待办事项管理工具，综合运用文件操作、JSON 处理、argparse 等知识，巩固 Python 编程基础。',
    category: '实战练习',
    tags: ['Python', '文件操作', '模块'],
    date: '2024-11-22',
    readTime: 15,
    isPractice: true,
    content: `## 项目结构

我们将构建一个功能完整的 CLI 待办事项工具，支持增删改查、标记完成、按优先级排序等功能。

\`\`\`python
#!/usr/bin/env python3
"""
todo.py - 命令行待办事项管理工具
用法:
    python todo.py add "买牛奶" --priority high
    python todo.py list
    python todo.py done 1
    python todo.py remove 1
"""

import json
import argparse
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass, asdict, field
from typing import Optional

TODO_FILE = Path.home() / '.todo.json'

@dataclass
class Todo:
    id: int
    title: str
    done: bool = False
    priority: str = 'medium'
    created_at: str = field(default_factory=lambda: datetime.now().isoformat())

    def to_dict(self):
        return asdict(self)

    @classmethod
    def from_dict(cls, data):
        return cls(**data)

def load_todos() -> list[Todo]:
    if not TODO_FILE.exists():
        return []
    with open(TODO_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return [Todo.from_dict(item) for item in data]

def save_todos(todos: list[Todo]):
    with open(TODO_FILE, 'w', encoding='utf-8') as f:
        json.dump([t.to_dict() for t in todos], f,
                  ensure_ascii=False, indent=2)

def add_todo(title: str, priority: str = 'medium'):
    todos = load_todos()
    new_id = max((t.id for t in todos), default=0) + 1
    todo = Todo(id=new_id, title=title, priority=priority)
    todos.append(todo)
    save_todos(todos)
    print(f"[+] 已添加: #{new_id} {title} (优先级: {priority})")

def list_todos(show_done: bool = False):
    todos = load_todos()
    if not show_done:
        todos = [t for t in todos if not t.done]

    priority_order = {'high': 0, 'medium': 1, 'low': 2}
    todos.sort(key=lambda t: (t.done, priority_order.get(t.priority, 1)))

    if not todos:
        print("没有待办事项!")
        return

    for todo in todos:
        status = "v" if todo.done else " "
        icon = {"high": "!!", "medium": "!", "low": " "}.get(todo.priority, " ")
        print(f"  [{status}] #{todo.id} [{icon}] {todo.title}")

def complete_todo(todo_id: int):
    todos = load_todos()
    for todo in todos:
        if todo.id == todo_id:
            todo.done = True
            save_todos(todos)
            print(f"[v] 已完成: #{todo_id} {todo.title}")
            return
    print(f"[!] 未找到待办事项 #{todo_id}")

def remove_todo(todo_id: int):
    todos = load_todos()
    original_len = len(todos)
    todos = [t for t in todos if t.id != todo_id]
    if len(todos) < original_len:
        save_todos(todos)
        print(f"[-] 已删除: #{todo_id}")
    else:
        print(f"[!] 未找到待办事项 #{todo_id}")

def main():
    parser = argparse.ArgumentParser(description='待办事项管理工具')
    subparsers = parser.add_subparsers(dest='command')

    # add 命令
    add_parser = subparsers.add_parser('add', help='添加待办事项')
    add_parser.add_argument('title', help='事项标题')
    add_parser.add_argument('--priority', '-p',
                           choices=['high', 'medium', 'low'],
                           default='medium', help='优先级')

    # list 命令
    list_parser = subparsers.add_parser('list', help='列出待办事项')
    list_parser.add_argument('--all', '-a', action='store_true',
                            help='显示已完成的事项')

    # done 命令
    done_parser = subparsers.add_parser('done', help='标记完成')
    done_parser.add_argument('id', type=int, help='事项ID')

    # remove 命令
    remove_parser = subparsers.add_parser('remove', help='删除事项')
    remove_parser.add_argument('id', type=int, help='事项ID')

    args = parser.parse_args()

    if args.command == 'add':
        add_todo(args.title, args.priority)
    elif args.command == 'list':
        list_todos(show_done=args.all)
    elif args.command == 'done':
        complete_todo(args.id)
    elif args.command == 'remove':
        remove_todo(args.id)
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
\`\`\`

## 运行示例

\`\`\`bash
$ python todo.py add "学习 Python 装饰器" -p high
[+] 已添加: #1 学习 Python 装饰器 (优先级: high)

$ python todo.py add "写博客文章" -p medium
[+] 已添加: #2 写博客文章 (优先级: medium)

$ python todo.py list
  [ ] #1 [!!] 学习 Python 装饰器
  [ ] #2 [ !] 写博客文章

$ python todo.py done 1
[v] 已完成: #1 学习 Python 装饰器

$ python todo.py list
  [ ] #2 [ !] 写博客文章
\`\`\`

> **扩展练习**：
> 1. 添加截止日期功能（\`--due 2024-12-31\`）
> 2. 添加标签功能，支持按标签筛选
> 3. 实现数据导出为 Markdown 格式`,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return articles.filter((a) => a.category === category);
}

export function getArticlesByTag(tag: string): BlogArticle[] {
  return articles.filter((a) => a.tags.includes(tag));
}

export function getPracticeArticles(): BlogArticle[] {
  return articles.filter((a) => a.isPractice);
}
