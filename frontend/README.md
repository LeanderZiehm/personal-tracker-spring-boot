# Frontend





dev
```
Step 1: create structure
mkdir -p src/app/core src/app/shared src/app/features
Step 2: generate services/guards
ng g service core/services/api
ng g guard core/guards/auth
Step 3: generate feature components
ng g component features/tasks/task-list --standalone
```