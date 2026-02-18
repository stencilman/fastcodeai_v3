"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. Heat Transfer in 2D plate" },
  { id: "topic2", label: "2. PINNs" },
  { id: "topic3", label: "3. Code" },
  { id: "topic4", label: "4. Steps" },
];

const RECOMMENDED_SLUGS = ["thesis-reality", "kans", "silu"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
            <Image
              src="/blogs/pinns-2d/content/pinns2d-hero.png"
              width="744"
              height="355"
              alt=""
            />
          </div>
          <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
            The MSE loss is the supervised loss, and 2D Plate loss is the
            unsupervised loss derived from the heat equation for the 2D plate
          </p>
          <p className="text-[#9EB3CF] text-lg font-bwmss01">
            In our previous blog post, we introduced the concept of Physics
            Informed Neural Networks, touching upon their applications and
            various use-cases. Today, {"we'll"} delve further into this
            fascinating topic by exploring our first use-case in detail: Heat
            Transfer in a 2D plate.
          </p>
          <p className="text-[#9EB3CF] text-lg font-bwmss01">
            {"Let's"} dive in...
          </p>
          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Heat Transfer in 2D plate
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              For analysis purpose, {"let's"} consider a 2D metallic plate
              subject to boundary conditions where one edge is maintained at 1°C
              and the remaining edges at 0°C. While {"it's"} possible to measure
              the temperature at various internal points, doing so necessitates
              the use of a thermometer for each measurement location. This
              raises a critical question: how many points should we measure to
              accurately assess the temperature distribution? The number of
              thermometers needed directly correlates to the number of points
              selected for measurement. The challenge then is to devise a method
              that allows for the generalized measurement of temperature at any
              given point (x, y) on the plate.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A potential approach to this problem involves leveraging
              techniques such as Finite Element Analysis (FEA) or Finite
              Difference Methods (FDM). However, {"it's"} important to note that
              these methods are accompanied by significant computational demands
              and can become exceedingly complex when dealing with irregular
              geometries. So, {"what's"} the alternative in such scenarios?
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-2d/content/pinns2d-1.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Heat Equation for 2D Plate
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              PINNs
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Given the complexities associated with the aforementioned
              methodologies, Physics Informed Neural Networks (PINNs) emerge as
              a viable alternative. Unlike traditional methods, PINNs do not
              necessitate meshing the domain but instead learn the solution
              directly. This attribute renders them exceptionally adaptable to
              complex geometries without notably escalating computational
              complexity.
            </p>
          </div>

          {/* end topic-2 */}
          {/* topic-3 */}

          <div
            id="topic3"
            ref={(el) => (topicRefs.current[2] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Code
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Now, {"let's"} dive into the coding segment. {"We'll"} begin by
              initializing boundary points with labels and selecting internal
              points for a rhombus. Following this, {"we'll"} construct a neural
              network using a fully connected architecture, which will be
              trained on the points {"we've"} generated. For the internal
              points, where labels are absent, we will calculate the loss by
              applying the Heat Equation specific to 2D plates. This calculated
              loss will then be integrated with the standard mean squared error
              loss function. Incorporating the Heat Equation in this manner
              allows the model to generate more reliable predictions for
              scenarios not explicitly represented in the training data,
              ensuring that its outputs adhere to the principles of
              thermodynamics.
            </p>
          </div>
          {/* end topic-3 */}

          {/* topic-4 */}

          <div
            id="topic4"
            ref={(el) => (topicRefs.current[3] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Steps
            </h4>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  First,{"we'll"} import the required libraries. Our model
                  creation will leverage PyTorch, while the Latin Hypercube
                  sampling method will be used to generate both boundary and
                  internal points.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                import numpy as np <br /> import matplotlib.pyplot as plt
                <br /> from scipy.stats.qmc import LatinHypercube
                <br />
                <br />
                import torch <br />
                import torch.nn as nn <br />
                from torchsummary import summary <br />
                from torch.utils.data import Dataset, DataLoader
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Next, we will initialize the rhombus by specifying the
                  coordinates of its vertices. Following this, we will employ
                  the Latin Hypercube sampling strategy to randomly select 25
                  points from each edge.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {" vertex1 = np.array([0, 0])"} <br />
                {" vertex2 = np.array([1, 2])"} <br />
                {" vertex3 = np.array([3, 2])"} <br />
                {" vertex4 = np.array([2, 0])"}
                <br />
                <br />
                {" left_edge = np.array([vertex1, vertex2])"} <br />
                {" top_edge = np.array([vertex2, vertex3])"} <br />
                {" right_edge = np.array([vertex3, vertex4])"} <br />
                {" bottom_edge = np.array([vertex4, vertex1])"}
              </p>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {" lhc = LatinHypercube(d=1)"}
                <br />
                <br />
                {" n_samples = 25"} <br />
                {" samples = lhc.random(n=n_samples) "}
                <br />
                <br />
                <br />
                {
                  " def get_boundary_points(edge, t_values): return [edge[0] + t * (edge[1] - edge[0]) for t in t_values]"
                }
                <br />
                <br />
                {
                  " top_points, bottom_points, left_points, right_points = [],[], [], []"
                }
                <br />
                <br />
                {
                  "top_points.extend( get_boundary_points(top_edge, samples.flatten()))"
                }
                <br />
                {
                  "bottom_points.extend( get_boundary_points( bottom_edge, samples.flatten()))"
                }
                <br />
                {
                  "left_points.extend( get_boundary_points(left_edge, samples.flatten()))"
                }
                <br />
                {
                  "right_points.extend( get_boundary_points(right_edge, samples.flatten()))"
                }
                <br />
              </p>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              Let’s now visualize the generated boundary data points.
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                import matplotlib.pyplot as plt
                <br />
                <br />
                {
                  "    vertices = np.array([vertex1, vertex2, vertex3, vertex4, vertex1])"
                }
                <br />
                {" plt.plot(vertices[:,0], vertices[:,1], 'r-')"}
                <br />
                <br />
                for point in top_points: <br />{" "}
                {"plt.plot(point[0], point[1], 'bo')"}
                <br />
                <br />
                for point in bottom_points: <br />{" "}
                {" plt.plot(point[0],point[1], 'go')"}
                <br />
                <br />
                for point in left_points: <br />{" "}
                {" plt.plot(point[0], point[1], 'yo')"}
                <br />
                <br />
                for point in right_points: <br />{" "}
                {" plt.plot(point[0],  point[1], 'co')"}
                <br />
                <br />
                <br />
                {"plt.xlabel('X')"}
                <br />
                {"plt.ylabel('Y')"}
                <br />
                {" plt.title('Random Points on Rhombus Edges')"}
                <br />
                {"  plt.axis('equal')"}
                <br />
                {"plt.legend()"}
                <br />
                {" plt.show()"}
                <br />
              </p>
            </div>
            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-2d/content/pinns2d-2.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  To generate the internal points, we will apply a geometric
                  approach. Initially, the rhombus will be divided into two
                  triangles. Subsequently, we will randomly generate 10,000
                  points within one of these triangles, which will then serve as
                  the internal points of the rhombus.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                def random_point_in_triangle(v1, v2, v3):
                <br />
                weights = np.random.rand(3)
                <br />
                weights /= weights.sum()
                <br />
                x = weights[0] * v1[0] + weights[1] * v2[0] + weights[2] * v3[0]
                <br />
                y = weights[0] * v1[1] + weights[1] * v2[1] + weights[2] * v3[1]
                <br />
                return [x, y]
                <br />
                <br />
                {
                  "def generate_random_points_in_ rhombus ( vertex1, vertex2, vertex3, vertex4, n):"
                }{" "}
                <br /> points = []
                <br />
                for _ in range(n):
                <br />
                if np.random.rand() {"<"} 0.5:
                <br />
                point = random_point_in_triangle(vertex1, vertex2, vertex3)
                <br />
                else:
                <br />
                point = random_point_in_triangle(vertex1, vertex3, vertex4)
                <br />
                points.append(point)
                <br />
                return np.array(points)
                <br />
              </p>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {
                  "internal_points = generate_random_points_in_ rhombus (vertex1, vertex2, vertex3, vertex4, 10000)"
                }
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Next, we will create a Dataset class based on PyTorch.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {" class EdgePointsDataset(Dataset): "}
                <br />
                {" def __init__(self, points)"}: <br />
                {" self.X = torch.tensor( points[0].astype(np.float32  )) "}
                <br />
                {" self.y = torch.tensor( points[1].astype(np.float32  )) "}
                <br />
                <br />
                {"def __len__(self):"} <br />
                {"return len(self.X) "}
                <br />
                <br />
                {"def __getitem__(self, idx):"} <br />
                {" return self.X[idx], self.y[idx]"}
              </p>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"class InternalPointsDataset(Dataset):"}
                <br />
                {" def __init__(self, X):"}
                <br />
                {
                  " self.X = torch.tensor(X.astype(np.float32), requires_grad=True)"
                }
                <br />

                <br />
                {"def __len__(self):"}
                <br />
                {"  return len(self.X)"}
                <br />

                <br />
                {" def __getitem__(self, idx):"}
                <br />
                {" return self.X[idx]"}
              </p>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Then, we will create a DataLoader for the Dataset classes we
                  established in the previous step.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                # Creating points list <br />
                {
                  "edge_points_X = np.array(top_points + bottom_points + left_points + right_points) edge_points_y = np.array([[1.0]]*len(top_points) + [[0.0]]*len(bottom_points) + [[0.0]]*len(left_points) + [[0.0]]*len(right_points)) edge_points = [edge_points_X, edge_points_y]"
                }
                <br />
                <br />
                # Dataset class <br />
                {"edge_points_dataset = EdgePointsDataset(edge_points)"}
                <br />
                {
                  "internal_points_dataset = InternalPointsDataset( internal_points)"
                }
                <br />
                <br />
                # Dataloader <br />
                {
                  "edge_points_dataloader = DataLoader(edge_points_dataset, batch_size=10, shuffle=True)"
                }{" "}
                <br />
                {
                  "internal_points_dataloader = DataLoader( internal_points_dataset, batch_size=1000, shuffle=True)"
                }
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Now, we will define the model class, which will include two
                  hidden layers, one input layer, and one output layer.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"  class NeuralNet(nn.Module):"} <br />
                {
                  " def __init__(self, input_neurons, hidden_neurons, output_neurons):"
                }{" "}
                <br />
                {" super(NeuralNet, self).__init__()"} <br />
                {"self.input_shape = input_neurons"} <br />
                {"self.output_shape = output_neurons"} <br />
                {"self.hidden_neurons = hidden_neurons"} <br />
                <br />
                {
                  "self.input_layer = nn.Linear(input_neurons, hidden_neurons)"
                }{" "}
                <br />
                {
                  "self.hidden_layer1 = nn.Linear(hidden_neurons, hidden_neurons)"
                }{" "}
                <br />
                {
                  "self.hidden_layer2 = nn.Linear(hidden_neurons, hidden_neurons)"
                }{" "}
                <br />
                {
                  "self.output_layer = nn.Linear(hidden_neurons, output_neurons)"
                }{" "}
                <br />
                <br />
                {"self.tanh = nn.Tanh()"}
                <br />
                <br />
                {"def forward(self, x):"} <br />
                {" x = self.input_layer(x) "}
                <br />
                {" x = self.tanh(x) "}
                <br />
                {" x = self.hidden_layer1(x) "}
                <br />
                {" x = self.tanh(x) "}
                <br />
                {" x = self.hidden_layer2(x) "}
                <br />
                {" x = self.tanh(x) "}
                <br />
                {" x = self.output_layer(x) "}
                <br />
                <br />
                return x
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  Next, we will introduce an optimizer and define the loss
                  function, preparing us to commence the {"model's"} training.
                  The following summary provides an overview of the model
                  architecture, including the count of trainable parameters.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {" device = 'cuda' if torch.cuda.is_available() else 'cpu'"}
                <br />
                {"model = NeuralNet(2,6,1).to(device)"}
                <br />
                {"optimizer = torch.optim.Adam( model.parameters(), lr = 5e-4)"}
                <br />
                {"loss_fn = nn.MSELoss()"}
                <br />
                {"summary(model, (1, 2))"}
              </p>
            </div>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-2d/content/pinns2d-3.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <ul>
                <li className="list-disc">
                  The final step involves training the model. Within the
                  training loop, {"you'll"} notice that we incorporate the heat
                  equation by utilizing the torch.autograd.grad() function. This
                  function calculates the derivative of the output with respect
                  to the input points, and this derivative is then integrated
                  into the loss function.
                </li>
              </ul>
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"loss_values = [] "}
                <br />
                {"epoch = 10000 "}
                <br />
                <br />
                {"for i in range(epoch):"} <br />
                {
                  " total_loss, edge_loss_total, internal_points_loss_total = 0.0, 0.0, 0.0 "
                }
                <br />
                {
                  " for (edge_points, temp), internal_points in zip(edge_points_dataloader, internal_points_dataloader):"
                }{" "}
                <br />
                {" optimizer.zero_grad() "}
                <br />
                <br />
                {"edge_points = edge_points.to(device)"} <br />
                {"temp = temp.to(device)"} <br />
                {"out = model(edge_points)"} <br />
                {"edge_points_loss = loss_fn(out, temp)"} <br />
                <br />
                {" internal_points = internal_points.to(device) "}
                <br />
                {" out_internal = model(internal_points) "}
                <br />
                {
                  "du_dx = torch.autograd.grad(out_internal, internal_points, torch.ones_like(out_internal), create_graph=True)[0][:, 0]"
                }{" "}
                <br />
                {
                  "du2_dx2 = torch.autograd.grad(du_dx, internal_points, torch.ones_like(du_dx), create_graph=True)[0][:, 0]"
                }{" "}
                <br />
                {
                  "du_dy = torch.autograd.grad(out_internal, internal_points, torch.ones_like(out_internal), create_graph=True)[0][:, 1]"
                }{" "}
                <br />
                {
                  "du2_dy2 = torch.autograd.grad(du_dy, internal_points, torch.ones_like(du_dy), create_graph=True)[0][:, 1]"
                }{" "}
                <br />
                <br />
                {" physics = du2_dx2 + du2_dy2"} <br />
                {" internal_points_loss = torch.mean(physics**2) "}
                <br />
                <br />
                {"loss = edge_points_loss + internal_points_loss "}
                <br />
                <br />
                {"  loss.backward()"} <br />
                {" optimizer.step() "}
                <br />
                {" total_loss += loss.item()"} <br />
                {"edge_loss_total += edge_points_loss.item()"} <br />
                {"  internal_points_loss_total += internal_points_loss.item() "}
                <br />
                <br />
                {"  loss_values.append(total_loss)"} <br />
                {"if (i+1) % 1000 == 0:"} <br />
                {/* {`  print(f"Epoch {i+1}, Training Loss: {total_loss/len(edge_points_dataloader)}, Edge Points Loss: {edge_loss_total/len(edge_points_dataloader)}, Internal Points Loss: {internal_points_loss_total/len(edge_points_dataloader)}")`}{" "} */}
                <br />
                <br />
                {"plt.semilogy(loss_values)"} <br />
                {"plt.legend()"} <br />
              </p>
            </div>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[10px] w-[100%]"
                src="/blogs/pinns-2d/content/pinns2d-4.jpeg"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              As we do multiple epochs, the loss reduces and the nearwork learns
              how heat is propagated on a 2D plate.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The decreasing loss values indicate that the model is successfully
              learning the pattern of heat transfer.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In this post, we explored the principles of heat transfer in a 2D
              plate and detailed the process of coding and training a neural
              network in Python to model these principles.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              I hope you found it insightful and enjoyable.
            </p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the next post, we will discuss the more complex case of heat
              transfer in the case of a lid-driven cavity.
            </p>
          </div>
          {/* end topic-4 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
