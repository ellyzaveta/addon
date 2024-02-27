#include <node.h>

using namespace v8;

void Add(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2) {
        isolate->ThrowException(String::NewFromUtf8(isolate, "Function requires exactly two arguments").ToLocalChecked());
        return;
    }

    if (args[0]->IsNumber() && args[1]->IsNumber()) {
        double value1 = args[0]->NumberValue(isolate->GetCurrentContext()).FromMaybe(0);
        double value2 = args[1]->NumberValue(isolate->GetCurrentContext()).FromMaybe(0);
        double sum = value1 + value2;

        args.GetReturnValue().Set(Number::New(isolate, sum));
    } else if (args[0]->IsString() || args[1]->IsString()) {
        String::Utf8Value str1(isolate, args[0]);
        String::Utf8Value str2(isolate, args[1]);
        std::string result = std::string(*str1) + std::string(*str2);

        args.GetReturnValue().Set(String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
    } else {
        isolate->ThrowException(String::NewFromUtf8(isolate, "Incorrect type of arguments").ToLocalChecked());
    }
}

void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "add", Add);
}

NODE_MODULE(addon, Initialize)