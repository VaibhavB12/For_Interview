*AWS CodeCommit*
1. **Code Commit Overview**: CodeCommit is a version control service by AWS for hosting repositories. It's similar to other platforms like GitHub and BitBucket.
2. **Repository Tags**: You can tag repositories in CodeCommit, making it easier to organize resources. For example, tagging a repository with "team of payments" helps you group related resources like EC2 instances and S3 buckets.
3. **Identity-Based Policies**: AWS Identity and Access Management (IAM) policies can be used to restrict access to repositories based on tags. For example, only developers tagged with "team of payments" can access the payment-related repositories.
4. **Security and Auditing**: CodeCommit integrates with AWS services like CloudTrail to track repository activities. This helps identify suspicious actions, like a user pulling all repositories before leaving an organization.
5. **Integration with Other AWS Services**: CodeCommit integrates tightly with other AWS services like Lambda and CloudTrail, enabling automated workflows such as triggering Lambda functions when code is pushed.
6. **Notification Rules**: You can set up notifications for repository events like pull requests, merges, or branch creations. These notifications can be sent via email or Slack.
7. **Data Protection**: All data in CodeCommit repositories is encrypted both in transit and at rest, ensuring security. AWS Key Management Service (KMS) is used for managing encryption keys.
These features make CodeCommit a reliable and secure option for hosting repositories, especially when integrated with other AWS services.


*Identity Policies for AWS CodeCommit*
Here are the key points in simple words:
1. **AWS CodeCommit Policies**: AWS provides three main managed policies for CodeCommit:
   - **CodeCommit Full Access**: Grants full access to the CodeCommit service. Typically used for admin users.
   - **CodeCommit Power User**: Grants all functionality except creating or deleting repositories.
   - **CodeCommit Read-Only**: Grants read-only access to repositories.
2. **Custom Policies**: It’s recommended to create custom policies instead of using the default ones. This provides more flexibility in controlling access.
3. **Encryption**: CodeCommit repositories encrypt data in transit and at rest. If there’s an explicit deny on the KMS service, users will be blocked from accessing repositories.
4. **Creating a User**: You can create a user in AWS and assign them CodeCommit policies, such as full access. Then, users can perform various actions (create, delete, etc.) on the repository.
5. **Explicit Deny**: If there’s an explicit deny policy at the KMS (Key Management Service) level, users will not be able to perform CodeCommit operations, even if they have full access.
6. **Identity-Based Policies**: You can set policies that are based on tags or other conditions to control access to specific repositories:
   - **Tag-based Policies**: Attach tags to repositories (like "payments") and grant access only to those repositories with the corresponding tags.
   - **Branch-based Policies**: You can deny certain operations (like push or commit) on specific branches, like the main branch.
7. **Deny Operations on the Main Branch**: If you want to prevent users from making changes directly on the main branch, you can create a policy that denies operations like pushing or committing on that branch.
8. **Testing Policies**: You can test these policies by creating repositories and testing user access, ensuring that users can only perform actions based on the policies applied.
9. **Flexibility in Permissions**: AWS CodeCommit allows fine-grained control over permissions, so you can grant or deny specific actions based on conditions like tags, branches, or even IP addresses.
In summary, AWS CodeCommit offers powerful ways to control access with policies that can be based on roles, tags, or branches, giving you flexibility and security in managing repositories.


*Approval Rule Template*
1. **Approval Rule Template**: This feature helps administrators automatically apply approval rules to pull requests in a repository. It ensures that certain changes (e.g., to the main branch) require approval from senior developers or specific team members.
2. **Approval Process**: When a developer creates a pull request, the approval rule is automatically added. For example, a senior developer or someone on the approval board needs to approve the change.
3. **Approval Members**: You can specify members who are allowed to approve the pull request, such as "Stacy" or "Matt." You can set the number of approvals needed (e.g., one approval or more).
4. **Workflow**:
   - A developer creates a pull request.
   - The approval status is initially "0 out of 1 rule satisfied" (i.e., not approved yet).
   - An approval member reviews and approves the request.
   - Once the required member approves, the approval status changes to "approved."
5. **Creating an Approval Rule**: In CodeCommit, you can create an approval rule template by specifying:
   - The approval members (users or IAM roles).
   - The number of approvals required.
   - The repository associated with the template.
6. **Testing the Approval Rule**: The video demonstrates creating a pull request and approving it:
   - A developer creates a branch, makes changes, and creates a pull request.
   - The administrator user can check the approval status.
   - If the approval is made by the right person (e.g., Stacy), the status is updated to "approved."
7. **Approval Verification**: Even if an administrator approves the request, the approval status will only be marked as "approved" if the correct member (as per the approval rule) approves it.
8. **Conclusion**: The approval rule template ensures only authorized members can approve changes, automating the approval process and enforcing team workflows.
This approach streamlines the process and ensures proper checks before changes are merged into the main branch.


*Overview of AWS CodeBuild*
1. **Compilation Process**: When you write code (e.g., in C or C++), the next step is to **compile** it. Compilation converts the source code into an **executable file**. This file can be run to perform the actions defined in the code (like printing "Hello").
2. **Compiling Code Manually**: On a server, you can manually compile the code using a compiler. For example, the video shows how to compile a C++ code using the `g++` compiler and produce an executable that prints "Hello".
3. **CodeCommit & CodeBuild Integration**: In organizations, developers typically **commit** their code to a **Git repository** (like AWS CodeCommit). The code needs to be compiled, and this is where **AWS CodeBuild** comes in.
4. **AWS CodeBuild**: CodeBuild is a fully managed service that automates the process of compiling source code, running tests, and creating software packages that are ready to be deployed. It fetches code from repositories (like CodeCommit), compiles it, and saves the output (e.g., the executable) in storage locations like **Amazon S3**.
5. **CodeBuild Workflow**:
   - CodeBuild fetches code from a Git repository.
   - It compiles the code and generates an executable.
   - The executable (binary) is uploaded to an **S3 bucket**.
   - CodeBuild can also run tests on the compiled code.
6. **Demo Setup**: In the demo, the presenter uses CodeBuild configured with a repository from AWS CodeCommit, which contains a simple C++ file that prints "Hello World". CodeBuild fetches the file, compiles it, and uploads the binary to an S3 bucket.
7. **Final Output**: Once the build is completed, the output binary is stored in the S3 bucket. When you run the binary on a supported system (e.g., Linux), it prints "Hello World".
This process automates the compilation and storage of builds, making it easier to manage and deploy applications.


*Building Code with AWS CodeBuild*
1. **Setting Up CodeCommit Repository**: Before using AWS CodeBuild, you first need a **CodeCommit repository** with sample code. The presenter creates a repository called "demo-repo" and adds a sample C++ file (`Demo.cpp`) to it.
2. **Creating a CodeBuild Project**: In AWS CodeBuild, you create a build project. The presenter names it "demo build project" and selects **CodeCommit** as the source provider, choosing the "demo-repo" as the repository where the code is stored.
3. **Setting Build Environment**: The build environment is set to use **Ubuntu** runtime with a Linux environment, which is the default configuration for CodeBuild.
4. **Specifying Build Commands**: In the **buildspec file**, the presenter adds commands to compile the C++ code (`demo.cpp`) and create an output executable file called `my-app`. The buildspec file also specifies where to upload the build output (the compiled binary).
5. **Configuring Artifact Upload to S3**: The output of the build (the compiled binary) is uploaded to an **S3 bucket**. The presenter ensures that the S3 bucket is in the same region as the CodeBuild project (North Virginia region in this case).
6. **Starting the Build**: After configuring the CodeBuild project, the build is started. CodeBuild fetches the code from CodeCommit, compiles it, and uploads the output binary to the specified S3 bucket.
7. **Build Completion**: Once the build completes successfully, the compiled binary file (`my-app`) is uploaded to the S3 bucket. The process is completed, and the output is available in the S3 bucket for use.
This practical example shows how to set up a CodeBuild project, compile code, and store the build output in an S3 bucket.


*Overview of CodeDeploy*
1. **Introduction to CodeDeploy**: The video introduces **CodeDeploy**, an AWS service that automates the deployment of applications to compute services like EC2 instances and Lambda. It helps in transferring application binaries (stored in S3) to the target instances.
2. **CodeDeploy's Role**: After the build process, the binary is stored in **S3**. CodeDeploy fetches this binary from S3 and deploys it to **EC2 instances** (or other services like Lambda) automatically.
3. **How CodeDeploy Works**: CodeDeploy fetches the application binary from the S3 bucket, stores it in a temporary folder on the EC2 instance, and then deploys it. Once deployed, the application can be started and configured as needed.
4. **Demo of Deployment**: The presenter demonstrates how to create a deployment in CodeDeploy, where the binary (`my-app`) is successfully deployed to an EC2 instance.
5. **Deployment Success**: After the deployment, the application is successfully transferred to the server, and it can be started for use. The process is completed with CodeDeploy handling the deployment task.
In summary, CodeDeploy automates the process of moving application binaries from S3 to EC2 instances (or other targets) and deploying them for use.


*Deployment through CodeDeploy*
Here are the key points from the video in simple terms:
1. **Create IAM Role for CodeDeploy Service**: 
   - First, create an IAM role in AWS for CodeDeploy with S3 read-only access.
2. **Create IAM Role for EC2 Instances**:
   - Create a separate IAM role for EC2 instances to allow them to interact with CodeDeploy. Attach S3 read-only access.
3. **Launch EC2 Instance**:
   - Launch an EC2 instance (called `demo-EC2`) and attach the IAM role you created for EC2 instances.
4. **Install CodeDeploy Agent**:
   - Log into the EC2 instance and install the CodeDeploy agent using commands to install Ruby and download the installation script.
5. **Configure CodeDeploy Service**:
   - In the AWS CodeDeploy console, create an application and a deployment group. Link the created roles and select the EC2 instance to deploy to.
6. **Create a Deployment**:
   - Create a deployment by specifying a zip file with your application code in S3. Include an `appspec.yml` file, which defines the deployment steps.
7. **Verify Deployment**:
   - CodeDeploy fetches the code from S3, reads the `appspec.yml` for instructions, and deploys the application to the EC2 instance.
By following these steps, you successfully set up and deploy an application using CodeDeploy on an EC2 instance.


*Overview of AWS CodePipeIine*
1. **Code Pipeline Overview**:  
   Code Pipeline automates the software release process by connecting CodeCommit, CodeBuild, and CodeDeploy.
2. **Manual Process Issue**:  
   Without Code Pipeline, the release process is manual. Developers need to trigger each service (CodeBuild and CodeDeploy) separately when a change is made in CodeCommit.
3. **Automation with Code Pipeline**:  
   Code Pipeline automatically triggers CodeBuild after a change in CodeCommit and, once the build is complete, it triggers CodeDeploy to deploy the app.
4. **Practical Demo**:  
   - The presenter demonstrates removing an old binary from the EC2 instance.
   - A change is made to the CodeCommit repository.
   - Code Pipeline detects the change, runs CodeBuild, and then triggers CodeDeploy to deploy the updated binary to the EC2 instance.
5. **Result**:  
   After the entire pipeline (CodeCommit → CodeBuild → CodeDeploy) runs, the updated binary is successfully deployed to the EC2 instance.
6. **Conclusion**:  
   Code Pipeline simplifies and automates the process of building and deploying code, making software releases faster and more efficient.



*Creating First Pipeline*
1. **Source and Artifacts**:  
   When a commit is made to the CodeCommit repository, CodePipeline automatically triggers the pipeline. The source artifact from CodeCommit is used as input for the build stage, and the build artifact (the compiled binary) is passed to the deploy stage.
2. **AppSpec File Requirement**:  
   Before running CodePipeline, you need to add an `appspec.yml` file to the repository. This file is used by CodeDeploy to know how to deploy the application (e.g., where to store the binary).
3. **Build Spec Configuration**:  
   In the `buildspec.yml` file, ensure you include both the `appspec.yml` and your application's code files. Otherwise, CodeDeploy will fail during deployment.
4. **Pipeline Creation**:  
   You create the pipeline by specifying the source provider (CodeCommit), build provider (CodeBuild), and deploy provider (CodeDeploy). CodePipeline will automatically trigger each stage when a change is detected in CodeCommit.
5. **Stages of CodePipeline**:  
   The pipeline goes through three main stages:
   - **Source**: Detects changes in CodeCommit.
   - **Build**: Builds the application and prepares the artifacts.
   - **Deploy**: Deploys the built application using CodeDeploy.
6. **Successful Execution**:  
   After the pipeline completes, the `myAB binary` is deployed to the EC2 instance in the `/tmp` directory.
7. **Automatic Triggering**:  
   Any future commits to the CodeCommit repository will automatically trigger the pipeline, running through the same stages.
8. **Deployment Stage Failures**:  
   If there's an error in the `appspec.yml` or `buildspec.yml` files, the deployment stage will fail. It's essential to ensure these files are correctly configured to avoid failure.
9. **CodePipeline's Automation**:  
   The pipeline automatically handles the entire process from commit to deployment, making the software release process faster and more efficient.


*Troubleshooting Failed Deployments*
1. **Removing `appspec.yaml` file**: 
   - The `appspec.yaml` file is crucial for the CodeDeploy stage in AWS CodePipeline. 
   - If it's removed from the build spec, CodeDeploy will fail.
2. **Build Spec Changes**: 
   - In the build spec, if only the `myApp` file is included as an artifact, the `appspec.yaml` will be missing from the deployment.
   - This can cause the CodeDeploy stage to fail, as CodeDeploy needs the `appspec.yaml` to deploy the app.
3. **CodeDeploy Failure**: 
   - When the `appspec.yaml` is missing, CodeDeploy will fail during the "BeforeInstall" stage.
   - You can check the CodeDeploy logs on the EC2 instance to see the error message, which indicates the missing `appspec.yaml`.
4. **Checking CodeDeploy Logs**: 
   - The logs are located in `/var/log/aws/codedeploy-agent`. 
   - In the log, the error message will mention the missing `appspec.yaml`.
5. **Fixing the Issue**: 
   - To fix the issue, update the build spec to include both the `myApp` and `appspec.yaml` files.
   - After updating the build spec, release the changes in CodePipeline.
6. **Successful Deployment**: 
   - Once the build spec is corrected, the pipeline will successfully complete the build and deployment stages.
7. **Troubleshooting Tip**: 
   - If a deployment fails, especially with CodeDeploy, check the `codedeploy-agent` logs for helpful error messages.
   - It's essential to ensure all required files (like `appspec.yaml`) are included in the build artifacts.
This covers the basics of troubleshooting a failed deployment in AWS CodePipeline and CodeDeploy.


*Code Pipeline Stage Transistions*
1. **Stage Transitions**: 
   - A stage transition links multiple stages in a pipeline. 
   - By default, transitions are enabled, meaning when one stage finishes, the next one automatically starts.
2. **Disabling Stage Transitions**: 
   - You can disable the transition between stages. 
   - If disabled, even after one stage completes, the next stage won’t run automatically.
3. **Approval Stage**: 
   - You can add a manual approval stage between two stages.
   - After the first stage completes, the pipeline will pause and wait for approval before continuing to the next stage.
   - This is useful in production environments to ensure that a manager or change manager approves the deployment.
4. **How Approval Stage Works**: 
   - After the build stage, the pipeline pauses for approval.
   - An email is sent with a link to approve or reject the deployment.
   - If the approval is rejected, the deployment will not proceed to the next stage.
5. **Using Manual Approval in Pipelines**: 
   - Manual approval is commonly used to control deployments in production.
   - It ensures that changes are reviewed before deployment happens.
This video covers how to manage stage transitions and add manual approval in CodePipeline for controlled deployments.


*CodeDeploy Deployment Configuration*
Here are the key points from the video in simple words:
1. **Deployment Configuration**: 
   - It helps control how new updates are deployed to multiple servers to prevent downtime.
   - It defines rules and conditions for deploying applications during the process.
2. **Three Deployment Configurations**:
   - **All at Once**: The application is deployed to all servers at once. The deployment is considered successful if at least one server is updated, but it fails if all servers fail.
   - **Half at a Time**: The application is deployed to half of the servers at once. The deployment succeeds if at least half of the servers are updated. For example, if there are 9 servers, at least 5 must be updated successfully for the deployment to succeed.
   - **One at a Time**: The application is deployed to one server at a time. The deployment succeeds if all servers are updated, except if the last server fails. If any other server fails, the deployment is considered a failure.
3. **Custom Deployment Configurations**: 
   - You can create your own custom deployment configuration with specific rules and conditions for your application.
4. **Example with One at a Time**:
   - In the "One at a Time" configuration, the deployment is done sequentially, one server after another. If a server fails before the last one, the whole deployment fails.
5. **Deployment Lifecycles**: 
   - In the "One at a Time" configuration, each server takes a set amount of time for deployment. For instance, it may take 10 minutes to deploy to one server before moving to the next.
This video explains how to manage deployment configurations using different strategies to ensure your application remains available and avoids downtime during updates.


*CodeDeploy AppSpec Hooks*
1. **Deployment Lifecycle**: 
   - When updating an application, you generally block traffic, stop the old application, pull the latest version, install it, start the service, and validate that everything works.
   - This process is managed through a section in the **appspec file** called **hooks**, where you associate commands with each step.
2. **Types of Hooks**:
   - **ApplicationStop**: Stops the existing application.
   - **DownloadBundle**: Downloads the new application and places it in a temporary location on the instance.
   - **BeforeInstall**: Executes tasks before installing the new application, like decrypting files or creating backups.
   - **Install**: Installs the new application.
   - **AfterInstall**: Executes tasks after installing, such as configuring permissions.
   - **ApplicationStart**: Starts the application.
   - **ValidateService**: Validates that the service is running successfully after deployment.
3. **Elastic Load Balancer (ELB) Environment**:
   - In an ELB environment, directly stopping the application is not recommended.
   - It's better to **deregister** instances from the load balancer before stopping the application and to **re-register** them after validation.
4. **ELB-Specific Hooks**:
   - **BeforeBlockTraffic**: Runs tasks before instances are deregistered from the load balancer.
   - **BlockTraffic**: Blocks internet traffic from accessing the instance.
   - **AfterBlockTraffic**: Runs tasks after the instance is deregistered from the load balancer.
   - **BeforeAllowTraffic**: Runs tasks before instances are registered back with the load balancer.
   - **AllowTraffic**: Allows internet traffic to access the instance after deployment.
   - **AfterAllowTraffic**: Runs tasks after the instance is re-registered with the load balancer.
This video explains the lifecycle and different hooks used in CodeDeploy for updating applications and managing traffic in both normal and ELB environments.
