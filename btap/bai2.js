var userName = "John"; // Khai báo biến userName và gán giá trị là một chuỗi
console.log(userName); // In ra "John"
userName = 123; // Gán lại giá trị cho biến đó là một số
console.log(userName); // In ra 123
/*
Giải thích:
Trong TypeScript, khi bạn khai báo một biến với một kiểu dữ liệu như string, TypeScript sẽ kiểm tra xem giá trị bạn gán cho biến đó có phù hợp với kiểu dữ liệu đã khai báo hay không.
Ban đầu, userName được khai báo là một chuỗi (string) và giá trị "John" phù hợp với kiểu dữ liệu này.
Sau đó, chúng ta gán lại giá trị cho userName là một số (123). TypeScript không cảnh báo hoặc báo lỗi ở đây, vì TypeScript cho phép gán lại giá trị cho biến.
Tuy nhiên, nếu bạn kích hoạt cấu hình 'strict' trong TypeScript, nó sẽ cảnh báo lỗi ở đây vì kiểu dữ liệu của userName đã được khai báo là string và không thể gán một số cho nó.
*/
